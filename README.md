## A BCHD gRPC client for node.js

This package provides a gRPC client for connecting to BCHD.  SLP support is provided when the full node has SLP index enabled, which is currently under development [here](https://github.com/simpleledgerinc/bchd).

### Install

`$ npm i grpc-bchrpc-node` (for web-browser based projects see [this](https://github.com/jcramer/grpc-bchrpc-web) version)

### Build from source (from `./bchrpc.proto`)

1. Install Protobuf Compiler from: https://github.com/protocolbuffers/protobuf
2. `$ npm i`
3. `$ npm run build`

### Example usage

In this simple example we create a new client that connects to `bchd.greyh.at:8335` and calls the `getRawTransaction` rpc endpoint and prints the result to the console.  We use `reversedHashOrder: true` to automatically reverse the txid endianness because BCHD expects to receive transaction hashes without endianness reversed.

```ts
let grpc = new GrpcClient({ url: "bchd.greyh.at:8335" });
let txid = "11556da6ee3cb1d14727b3a8f4b37093b6fecd2bc7d577a02b4e98b7be58a7e8";
let res = await grpc.getRawTransaction({ hash: txid, reversedHashOrder: true });
console.log(Buffer.from(res.getTransaction_asU8()).toString('hex'));
```

See also the `test` directory for more examples of how to use.

### Tests

Some integration tests have been added. Extensive test coverage is not planned currently planned since this library is just a wrapper for BCHD's gRPC interface.

`$ npm test`

### Known Public Instances

* https://bchd.greyh.at:8335
* https://bchd.imaginary.cash:8335
* https://bchd-testnet.greyh.at:18335
* https://bchd.fountainhead.cash:443

### Connecting to local BCHD

To connect to a local BCHD server you will need to utilize a self-signed certificate. Simply start BCHD using `rpccert=` and `rpckey=` flags pointing to a location where to save new certificate and private key files.

Then you can connect using the following `GrpcClient` constructor:

`const grpc = new GrpcClient({ url: "localhost:8335", rootCertPath: "<path to cert>"});`

### Change Log

#### 0.11.2

- update protobuf with new burn request requirements for mint baton
- removed unused functionary signer options in client

#### 0.11.1

- update protobuf with new burn flags

#### 0.11.0
- This update includes support for the new SLP index feature currently being tested for BCHD.  When the BCHD SLP index is enabled the full node will prevent accidental SLP token burns by rejecting invalid SLP transactions from connected gRPC clients.  This feature caused a minor change in the usage of the `SubmitTransaction()` method, where `skipSlpValidityChecks: true` needs to be added as a parameter if the BCHD full node does not have SLP indexing enabled.

#### 0.10.2
- Add optional addresses/outpoint filters for transaction subscription
- Add optional include full transaction in raw mempool request

#### 0.10.1
- Typings update (export all grpc types)

#### 0.10.0
- Update the `getAddressTransactions` method with new parameters
