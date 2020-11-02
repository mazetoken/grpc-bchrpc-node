// package: pb
// file: pb/bchrpc.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as pb_bchrpc_pb from "../pb/bchrpc_pb";

interface IbchrpcService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getMempoolInfo: IbchrpcService_IGetMempoolInfo;
    getMempool: IbchrpcService_IGetMempool;
    getBlockchainInfo: IbchrpcService_IGetBlockchainInfo;
    getBlockInfo: IbchrpcService_IGetBlockInfo;
    getBlock: IbchrpcService_IGetBlock;
    getRawBlock: IbchrpcService_IGetRawBlock;
    getBlockFilter: IbchrpcService_IGetBlockFilter;
    getHeaders: IbchrpcService_IGetHeaders;
    getTransaction: IbchrpcService_IGetTransaction;
    getRawTransaction: IbchrpcService_IGetRawTransaction;
    getAddressTransactions: IbchrpcService_IGetAddressTransactions;
    getRawAddressTransactions: IbchrpcService_IGetRawAddressTransactions;
    getAddressUnspentOutputs: IbchrpcService_IGetAddressUnspentOutputs;
    getUnspentOutput: IbchrpcService_IGetUnspentOutput;
    getMerkleProof: IbchrpcService_IGetMerkleProof;
    getTokenMetadata: IbchrpcService_IGetTokenMetadata;
    getParsedSlpScript: IbchrpcService_IGetParsedSlpScript;
    getTrustedSlpValidation: IbchrpcService_IGetTrustedSlpValidation;
    getBip44HdAddress: IbchrpcService_IGetBip44HdAddress;
    checkSlpTransaction: IbchrpcService_ICheckSlpTransaction;
    submitTransaction: IbchrpcService_ISubmitTransaction;
    subscribeTransactions: IbchrpcService_ISubscribeTransactions;
    subscribeTransactionStream: IbchrpcService_ISubscribeTransactionStream;
    subscribeBlocks: IbchrpcService_ISubscribeBlocks;
}

interface IbchrpcService_IGetMempoolInfo extends grpc.MethodDefinition<pb_bchrpc_pb.GetMempoolInfoRequest, pb_bchrpc_pb.GetMempoolInfoResponse> {
    path: string; // "/pb.bchrpc/GetMempoolInfo"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pb_bchrpc_pb.GetMempoolInfoRequest>;
    requestDeserialize: grpc.deserialize<pb_bchrpc_pb.GetMempoolInfoRequest>;
    responseSerialize: grpc.serialize<pb_bchrpc_pb.GetMempoolInfoResponse>;
    responseDeserialize: grpc.deserialize<pb_bchrpc_pb.GetMempoolInfoResponse>;
}
interface IbchrpcService_IGetMempool extends grpc.MethodDefinition<pb_bchrpc_pb.GetMempoolRequest, pb_bchrpc_pb.GetMempoolResponse> {
    path: string; // "/pb.bchrpc/GetMempool"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pb_bchrpc_pb.GetMempoolRequest>;
    requestDeserialize: grpc.deserialize<pb_bchrpc_pb.GetMempoolRequest>;
    responseSerialize: grpc.serialize<pb_bchrpc_pb.GetMempoolResponse>;
    responseDeserialize: grpc.deserialize<pb_bchrpc_pb.GetMempoolResponse>;
}
interface IbchrpcService_IGetBlockchainInfo extends grpc.MethodDefinition<pb_bchrpc_pb.GetBlockchainInfoRequest, pb_bchrpc_pb.GetBlockchainInfoResponse> {
    path: string; // "/pb.bchrpc/GetBlockchainInfo"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pb_bchrpc_pb.GetBlockchainInfoRequest>;
    requestDeserialize: grpc.deserialize<pb_bchrpc_pb.GetBlockchainInfoRequest>;
    responseSerialize: grpc.serialize<pb_bchrpc_pb.GetBlockchainInfoResponse>;
    responseDeserialize: grpc.deserialize<pb_bchrpc_pb.GetBlockchainInfoResponse>;
}
interface IbchrpcService_IGetBlockInfo extends grpc.MethodDefinition<pb_bchrpc_pb.GetBlockInfoRequest, pb_bchrpc_pb.GetBlockInfoResponse> {
    path: string; // "/pb.bchrpc/GetBlockInfo"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pb_bchrpc_pb.GetBlockInfoRequest>;
    requestDeserialize: grpc.deserialize<pb_bchrpc_pb.GetBlockInfoRequest>;
    responseSerialize: grpc.serialize<pb_bchrpc_pb.GetBlockInfoResponse>;
    responseDeserialize: grpc.deserialize<pb_bchrpc_pb.GetBlockInfoResponse>;
}
interface IbchrpcService_IGetBlock extends grpc.MethodDefinition<pb_bchrpc_pb.GetBlockRequest, pb_bchrpc_pb.GetBlockResponse> {
    path: string; // "/pb.bchrpc/GetBlock"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pb_bchrpc_pb.GetBlockRequest>;
    requestDeserialize: grpc.deserialize<pb_bchrpc_pb.GetBlockRequest>;
    responseSerialize: grpc.serialize<pb_bchrpc_pb.GetBlockResponse>;
    responseDeserialize: grpc.deserialize<pb_bchrpc_pb.GetBlockResponse>;
}
interface IbchrpcService_IGetRawBlock extends grpc.MethodDefinition<pb_bchrpc_pb.GetRawBlockRequest, pb_bchrpc_pb.GetRawBlockResponse> {
    path: string; // "/pb.bchrpc/GetRawBlock"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pb_bchrpc_pb.GetRawBlockRequest>;
    requestDeserialize: grpc.deserialize<pb_bchrpc_pb.GetRawBlockRequest>;
    responseSerialize: grpc.serialize<pb_bchrpc_pb.GetRawBlockResponse>;
    responseDeserialize: grpc.deserialize<pb_bchrpc_pb.GetRawBlockResponse>;
}
interface IbchrpcService_IGetBlockFilter extends grpc.MethodDefinition<pb_bchrpc_pb.GetBlockFilterRequest, pb_bchrpc_pb.GetBlockFilterResponse> {
    path: string; // "/pb.bchrpc/GetBlockFilter"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pb_bchrpc_pb.GetBlockFilterRequest>;
    requestDeserialize: grpc.deserialize<pb_bchrpc_pb.GetBlockFilterRequest>;
    responseSerialize: grpc.serialize<pb_bchrpc_pb.GetBlockFilterResponse>;
    responseDeserialize: grpc.deserialize<pb_bchrpc_pb.GetBlockFilterResponse>;
}
interface IbchrpcService_IGetHeaders extends grpc.MethodDefinition<pb_bchrpc_pb.GetHeadersRequest, pb_bchrpc_pb.GetHeadersResponse> {
    path: string; // "/pb.bchrpc/GetHeaders"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pb_bchrpc_pb.GetHeadersRequest>;
    requestDeserialize: grpc.deserialize<pb_bchrpc_pb.GetHeadersRequest>;
    responseSerialize: grpc.serialize<pb_bchrpc_pb.GetHeadersResponse>;
    responseDeserialize: grpc.deserialize<pb_bchrpc_pb.GetHeadersResponse>;
}
interface IbchrpcService_IGetTransaction extends grpc.MethodDefinition<pb_bchrpc_pb.GetTransactionRequest, pb_bchrpc_pb.GetTransactionResponse> {
    path: string; // "/pb.bchrpc/GetTransaction"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pb_bchrpc_pb.GetTransactionRequest>;
    requestDeserialize: grpc.deserialize<pb_bchrpc_pb.GetTransactionRequest>;
    responseSerialize: grpc.serialize<pb_bchrpc_pb.GetTransactionResponse>;
    responseDeserialize: grpc.deserialize<pb_bchrpc_pb.GetTransactionResponse>;
}
interface IbchrpcService_IGetRawTransaction extends grpc.MethodDefinition<pb_bchrpc_pb.GetRawTransactionRequest, pb_bchrpc_pb.GetRawTransactionResponse> {
    path: string; // "/pb.bchrpc/GetRawTransaction"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pb_bchrpc_pb.GetRawTransactionRequest>;
    requestDeserialize: grpc.deserialize<pb_bchrpc_pb.GetRawTransactionRequest>;
    responseSerialize: grpc.serialize<pb_bchrpc_pb.GetRawTransactionResponse>;
    responseDeserialize: grpc.deserialize<pb_bchrpc_pb.GetRawTransactionResponse>;
}
interface IbchrpcService_IGetAddressTransactions extends grpc.MethodDefinition<pb_bchrpc_pb.GetAddressTransactionsRequest, pb_bchrpc_pb.GetAddressTransactionsResponse> {
    path: string; // "/pb.bchrpc/GetAddressTransactions"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pb_bchrpc_pb.GetAddressTransactionsRequest>;
    requestDeserialize: grpc.deserialize<pb_bchrpc_pb.GetAddressTransactionsRequest>;
    responseSerialize: grpc.serialize<pb_bchrpc_pb.GetAddressTransactionsResponse>;
    responseDeserialize: grpc.deserialize<pb_bchrpc_pb.GetAddressTransactionsResponse>;
}
interface IbchrpcService_IGetRawAddressTransactions extends grpc.MethodDefinition<pb_bchrpc_pb.GetRawAddressTransactionsRequest, pb_bchrpc_pb.GetRawAddressTransactionsResponse> {
    path: string; // "/pb.bchrpc/GetRawAddressTransactions"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pb_bchrpc_pb.GetRawAddressTransactionsRequest>;
    requestDeserialize: grpc.deserialize<pb_bchrpc_pb.GetRawAddressTransactionsRequest>;
    responseSerialize: grpc.serialize<pb_bchrpc_pb.GetRawAddressTransactionsResponse>;
    responseDeserialize: grpc.deserialize<pb_bchrpc_pb.GetRawAddressTransactionsResponse>;
}
interface IbchrpcService_IGetAddressUnspentOutputs extends grpc.MethodDefinition<pb_bchrpc_pb.GetAddressUnspentOutputsRequest, pb_bchrpc_pb.GetAddressUnspentOutputsResponse> {
    path: string; // "/pb.bchrpc/GetAddressUnspentOutputs"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pb_bchrpc_pb.GetAddressUnspentOutputsRequest>;
    requestDeserialize: grpc.deserialize<pb_bchrpc_pb.GetAddressUnspentOutputsRequest>;
    responseSerialize: grpc.serialize<pb_bchrpc_pb.GetAddressUnspentOutputsResponse>;
    responseDeserialize: grpc.deserialize<pb_bchrpc_pb.GetAddressUnspentOutputsResponse>;
}
interface IbchrpcService_IGetUnspentOutput extends grpc.MethodDefinition<pb_bchrpc_pb.GetUnspentOutputRequest, pb_bchrpc_pb.GetUnspentOutputResponse> {
    path: string; // "/pb.bchrpc/GetUnspentOutput"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pb_bchrpc_pb.GetUnspentOutputRequest>;
    requestDeserialize: grpc.deserialize<pb_bchrpc_pb.GetUnspentOutputRequest>;
    responseSerialize: grpc.serialize<pb_bchrpc_pb.GetUnspentOutputResponse>;
    responseDeserialize: grpc.deserialize<pb_bchrpc_pb.GetUnspentOutputResponse>;
}
interface IbchrpcService_IGetMerkleProof extends grpc.MethodDefinition<pb_bchrpc_pb.GetMerkleProofRequest, pb_bchrpc_pb.GetMerkleProofResponse> {
    path: string; // "/pb.bchrpc/GetMerkleProof"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pb_bchrpc_pb.GetMerkleProofRequest>;
    requestDeserialize: grpc.deserialize<pb_bchrpc_pb.GetMerkleProofRequest>;
    responseSerialize: grpc.serialize<pb_bchrpc_pb.GetMerkleProofResponse>;
    responseDeserialize: grpc.deserialize<pb_bchrpc_pb.GetMerkleProofResponse>;
}
interface IbchrpcService_IGetTokenMetadata extends grpc.MethodDefinition<pb_bchrpc_pb.GetTokenMetadataRequest, pb_bchrpc_pb.GetTokenMetadataResponse> {
    path: string; // "/pb.bchrpc/GetTokenMetadata"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pb_bchrpc_pb.GetTokenMetadataRequest>;
    requestDeserialize: grpc.deserialize<pb_bchrpc_pb.GetTokenMetadataRequest>;
    responseSerialize: grpc.serialize<pb_bchrpc_pb.GetTokenMetadataResponse>;
    responseDeserialize: grpc.deserialize<pb_bchrpc_pb.GetTokenMetadataResponse>;
}
interface IbchrpcService_IGetParsedSlpScript extends grpc.MethodDefinition<pb_bchrpc_pb.GetParsedSlpScriptRequest, pb_bchrpc_pb.GetParsedSlpScriptResponse> {
    path: string; // "/pb.bchrpc/GetParsedSlpScript"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pb_bchrpc_pb.GetParsedSlpScriptRequest>;
    requestDeserialize: grpc.deserialize<pb_bchrpc_pb.GetParsedSlpScriptRequest>;
    responseSerialize: grpc.serialize<pb_bchrpc_pb.GetParsedSlpScriptResponse>;
    responseDeserialize: grpc.deserialize<pb_bchrpc_pb.GetParsedSlpScriptResponse>;
}
interface IbchrpcService_IGetTrustedSlpValidation extends grpc.MethodDefinition<pb_bchrpc_pb.GetTrustedSlpValidationRequest, pb_bchrpc_pb.GetTrustedSlpValidationResponse> {
    path: string; // "/pb.bchrpc/GetTrustedSlpValidation"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pb_bchrpc_pb.GetTrustedSlpValidationRequest>;
    requestDeserialize: grpc.deserialize<pb_bchrpc_pb.GetTrustedSlpValidationRequest>;
    responseSerialize: grpc.serialize<pb_bchrpc_pb.GetTrustedSlpValidationResponse>;
    responseDeserialize: grpc.deserialize<pb_bchrpc_pb.GetTrustedSlpValidationResponse>;
}
interface IbchrpcService_IGetBip44HdAddress extends grpc.MethodDefinition<pb_bchrpc_pb.GetBip44HdAddressRequest, pb_bchrpc_pb.GetBip44HdAddressResponse> {
    path: string; // "/pb.bchrpc/GetBip44HdAddress"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pb_bchrpc_pb.GetBip44HdAddressRequest>;
    requestDeserialize: grpc.deserialize<pb_bchrpc_pb.GetBip44HdAddressRequest>;
    responseSerialize: grpc.serialize<pb_bchrpc_pb.GetBip44HdAddressResponse>;
    responseDeserialize: grpc.deserialize<pb_bchrpc_pb.GetBip44HdAddressResponse>;
}
interface IbchrpcService_ICheckSlpTransaction extends grpc.MethodDefinition<pb_bchrpc_pb.CheckSlpTransactionRequest, pb_bchrpc_pb.CheckSlpTransactionResponse> {
    path: string; // "/pb.bchrpc/CheckSlpTransaction"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pb_bchrpc_pb.CheckSlpTransactionRequest>;
    requestDeserialize: grpc.deserialize<pb_bchrpc_pb.CheckSlpTransactionRequest>;
    responseSerialize: grpc.serialize<pb_bchrpc_pb.CheckSlpTransactionResponse>;
    responseDeserialize: grpc.deserialize<pb_bchrpc_pb.CheckSlpTransactionResponse>;
}
interface IbchrpcService_ISubmitTransaction extends grpc.MethodDefinition<pb_bchrpc_pb.SubmitTransactionRequest, pb_bchrpc_pb.SubmitTransactionResponse> {
    path: string; // "/pb.bchrpc/SubmitTransaction"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<pb_bchrpc_pb.SubmitTransactionRequest>;
    requestDeserialize: grpc.deserialize<pb_bchrpc_pb.SubmitTransactionRequest>;
    responseSerialize: grpc.serialize<pb_bchrpc_pb.SubmitTransactionResponse>;
    responseDeserialize: grpc.deserialize<pb_bchrpc_pb.SubmitTransactionResponse>;
}
interface IbchrpcService_ISubscribeTransactions extends grpc.MethodDefinition<pb_bchrpc_pb.SubscribeTransactionsRequest, pb_bchrpc_pb.TransactionNotification> {
    path: string; // "/pb.bchrpc/SubscribeTransactions"
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<pb_bchrpc_pb.SubscribeTransactionsRequest>;
    requestDeserialize: grpc.deserialize<pb_bchrpc_pb.SubscribeTransactionsRequest>;
    responseSerialize: grpc.serialize<pb_bchrpc_pb.TransactionNotification>;
    responseDeserialize: grpc.deserialize<pb_bchrpc_pb.TransactionNotification>;
}
interface IbchrpcService_ISubscribeTransactionStream extends grpc.MethodDefinition<pb_bchrpc_pb.SubscribeTransactionsRequest, pb_bchrpc_pb.TransactionNotification> {
    path: string; // "/pb.bchrpc/SubscribeTransactionStream"
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<pb_bchrpc_pb.SubscribeTransactionsRequest>;
    requestDeserialize: grpc.deserialize<pb_bchrpc_pb.SubscribeTransactionsRequest>;
    responseSerialize: grpc.serialize<pb_bchrpc_pb.TransactionNotification>;
    responseDeserialize: grpc.deserialize<pb_bchrpc_pb.TransactionNotification>;
}
interface IbchrpcService_ISubscribeBlocks extends grpc.MethodDefinition<pb_bchrpc_pb.SubscribeBlocksRequest, pb_bchrpc_pb.BlockNotification> {
    path: string; // "/pb.bchrpc/SubscribeBlocks"
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<pb_bchrpc_pb.SubscribeBlocksRequest>;
    requestDeserialize: grpc.deserialize<pb_bchrpc_pb.SubscribeBlocksRequest>;
    responseSerialize: grpc.serialize<pb_bchrpc_pb.BlockNotification>;
    responseDeserialize: grpc.deserialize<pb_bchrpc_pb.BlockNotification>;
}

export const bchrpcService: IbchrpcService;

export interface IbchrpcServer {
    getMempoolInfo: grpc.handleUnaryCall<pb_bchrpc_pb.GetMempoolInfoRequest, pb_bchrpc_pb.GetMempoolInfoResponse>;
    getMempool: grpc.handleUnaryCall<pb_bchrpc_pb.GetMempoolRequest, pb_bchrpc_pb.GetMempoolResponse>;
    getBlockchainInfo: grpc.handleUnaryCall<pb_bchrpc_pb.GetBlockchainInfoRequest, pb_bchrpc_pb.GetBlockchainInfoResponse>;
    getBlockInfo: grpc.handleUnaryCall<pb_bchrpc_pb.GetBlockInfoRequest, pb_bchrpc_pb.GetBlockInfoResponse>;
    getBlock: grpc.handleUnaryCall<pb_bchrpc_pb.GetBlockRequest, pb_bchrpc_pb.GetBlockResponse>;
    getRawBlock: grpc.handleUnaryCall<pb_bchrpc_pb.GetRawBlockRequest, pb_bchrpc_pb.GetRawBlockResponse>;
    getBlockFilter: grpc.handleUnaryCall<pb_bchrpc_pb.GetBlockFilterRequest, pb_bchrpc_pb.GetBlockFilterResponse>;
    getHeaders: grpc.handleUnaryCall<pb_bchrpc_pb.GetHeadersRequest, pb_bchrpc_pb.GetHeadersResponse>;
    getTransaction: grpc.handleUnaryCall<pb_bchrpc_pb.GetTransactionRequest, pb_bchrpc_pb.GetTransactionResponse>;
    getRawTransaction: grpc.handleUnaryCall<pb_bchrpc_pb.GetRawTransactionRequest, pb_bchrpc_pb.GetRawTransactionResponse>;
    getAddressTransactions: grpc.handleUnaryCall<pb_bchrpc_pb.GetAddressTransactionsRequest, pb_bchrpc_pb.GetAddressTransactionsResponse>;
    getRawAddressTransactions: grpc.handleUnaryCall<pb_bchrpc_pb.GetRawAddressTransactionsRequest, pb_bchrpc_pb.GetRawAddressTransactionsResponse>;
    getAddressUnspentOutputs: grpc.handleUnaryCall<pb_bchrpc_pb.GetAddressUnspentOutputsRequest, pb_bchrpc_pb.GetAddressUnspentOutputsResponse>;
    getUnspentOutput: grpc.handleUnaryCall<pb_bchrpc_pb.GetUnspentOutputRequest, pb_bchrpc_pb.GetUnspentOutputResponse>;
    getMerkleProof: grpc.handleUnaryCall<pb_bchrpc_pb.GetMerkleProofRequest, pb_bchrpc_pb.GetMerkleProofResponse>;
    getTokenMetadata: grpc.handleUnaryCall<pb_bchrpc_pb.GetTokenMetadataRequest, pb_bchrpc_pb.GetTokenMetadataResponse>;
    getParsedSlpScript: grpc.handleUnaryCall<pb_bchrpc_pb.GetParsedSlpScriptRequest, pb_bchrpc_pb.GetParsedSlpScriptResponse>;
    getTrustedSlpValidation: grpc.handleUnaryCall<pb_bchrpc_pb.GetTrustedSlpValidationRequest, pb_bchrpc_pb.GetTrustedSlpValidationResponse>;
    getBip44HdAddress: grpc.handleUnaryCall<pb_bchrpc_pb.GetBip44HdAddressRequest, pb_bchrpc_pb.GetBip44HdAddressResponse>;
    checkSlpTransaction: grpc.handleUnaryCall<pb_bchrpc_pb.CheckSlpTransactionRequest, pb_bchrpc_pb.CheckSlpTransactionResponse>;
    submitTransaction: grpc.handleUnaryCall<pb_bchrpc_pb.SubmitTransactionRequest, pb_bchrpc_pb.SubmitTransactionResponse>;
    subscribeTransactions: grpc.handleServerStreamingCall<pb_bchrpc_pb.SubscribeTransactionsRequest, pb_bchrpc_pb.TransactionNotification>;
    subscribeTransactionStream: grpc.handleBidiStreamingCall<pb_bchrpc_pb.SubscribeTransactionsRequest, pb_bchrpc_pb.TransactionNotification>;
    subscribeBlocks: grpc.handleServerStreamingCall<pb_bchrpc_pb.SubscribeBlocksRequest, pb_bchrpc_pb.BlockNotification>;
}

export interface IbchrpcClient {
    getMempoolInfo(request: pb_bchrpc_pb.GetMempoolInfoRequest, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetMempoolInfoResponse) => void): grpc.ClientUnaryCall;
    getMempoolInfo(request: pb_bchrpc_pb.GetMempoolInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetMempoolInfoResponse) => void): grpc.ClientUnaryCall;
    getMempoolInfo(request: pb_bchrpc_pb.GetMempoolInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetMempoolInfoResponse) => void): grpc.ClientUnaryCall;
    getMempool(request: pb_bchrpc_pb.GetMempoolRequest, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetMempoolResponse) => void): grpc.ClientUnaryCall;
    getMempool(request: pb_bchrpc_pb.GetMempoolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetMempoolResponse) => void): grpc.ClientUnaryCall;
    getMempool(request: pb_bchrpc_pb.GetMempoolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetMempoolResponse) => void): grpc.ClientUnaryCall;
    getBlockchainInfo(request: pb_bchrpc_pb.GetBlockchainInfoRequest, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetBlockchainInfoResponse) => void): grpc.ClientUnaryCall;
    getBlockchainInfo(request: pb_bchrpc_pb.GetBlockchainInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetBlockchainInfoResponse) => void): grpc.ClientUnaryCall;
    getBlockchainInfo(request: pb_bchrpc_pb.GetBlockchainInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetBlockchainInfoResponse) => void): grpc.ClientUnaryCall;
    getBlockInfo(request: pb_bchrpc_pb.GetBlockInfoRequest, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetBlockInfoResponse) => void): grpc.ClientUnaryCall;
    getBlockInfo(request: pb_bchrpc_pb.GetBlockInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetBlockInfoResponse) => void): grpc.ClientUnaryCall;
    getBlockInfo(request: pb_bchrpc_pb.GetBlockInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetBlockInfoResponse) => void): grpc.ClientUnaryCall;
    getBlock(request: pb_bchrpc_pb.GetBlockRequest, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetBlockResponse) => void): grpc.ClientUnaryCall;
    getBlock(request: pb_bchrpc_pb.GetBlockRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetBlockResponse) => void): grpc.ClientUnaryCall;
    getBlock(request: pb_bchrpc_pb.GetBlockRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetBlockResponse) => void): grpc.ClientUnaryCall;
    getRawBlock(request: pb_bchrpc_pb.GetRawBlockRequest, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetRawBlockResponse) => void): grpc.ClientUnaryCall;
    getRawBlock(request: pb_bchrpc_pb.GetRawBlockRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetRawBlockResponse) => void): grpc.ClientUnaryCall;
    getRawBlock(request: pb_bchrpc_pb.GetRawBlockRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetRawBlockResponse) => void): grpc.ClientUnaryCall;
    getBlockFilter(request: pb_bchrpc_pb.GetBlockFilterRequest, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetBlockFilterResponse) => void): grpc.ClientUnaryCall;
    getBlockFilter(request: pb_bchrpc_pb.GetBlockFilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetBlockFilterResponse) => void): grpc.ClientUnaryCall;
    getBlockFilter(request: pb_bchrpc_pb.GetBlockFilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetBlockFilterResponse) => void): grpc.ClientUnaryCall;
    getHeaders(request: pb_bchrpc_pb.GetHeadersRequest, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetHeadersResponse) => void): grpc.ClientUnaryCall;
    getHeaders(request: pb_bchrpc_pb.GetHeadersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetHeadersResponse) => void): grpc.ClientUnaryCall;
    getHeaders(request: pb_bchrpc_pb.GetHeadersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetHeadersResponse) => void): grpc.ClientUnaryCall;
    getTransaction(request: pb_bchrpc_pb.GetTransactionRequest, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetTransactionResponse) => void): grpc.ClientUnaryCall;
    getTransaction(request: pb_bchrpc_pb.GetTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetTransactionResponse) => void): grpc.ClientUnaryCall;
    getTransaction(request: pb_bchrpc_pb.GetTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetTransactionResponse) => void): grpc.ClientUnaryCall;
    getRawTransaction(request: pb_bchrpc_pb.GetRawTransactionRequest, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetRawTransactionResponse) => void): grpc.ClientUnaryCall;
    getRawTransaction(request: pb_bchrpc_pb.GetRawTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetRawTransactionResponse) => void): grpc.ClientUnaryCall;
    getRawTransaction(request: pb_bchrpc_pb.GetRawTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetRawTransactionResponse) => void): grpc.ClientUnaryCall;
    getAddressTransactions(request: pb_bchrpc_pb.GetAddressTransactionsRequest, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetAddressTransactionsResponse) => void): grpc.ClientUnaryCall;
    getAddressTransactions(request: pb_bchrpc_pb.GetAddressTransactionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetAddressTransactionsResponse) => void): grpc.ClientUnaryCall;
    getAddressTransactions(request: pb_bchrpc_pb.GetAddressTransactionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetAddressTransactionsResponse) => void): grpc.ClientUnaryCall;
    getRawAddressTransactions(request: pb_bchrpc_pb.GetRawAddressTransactionsRequest, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetRawAddressTransactionsResponse) => void): grpc.ClientUnaryCall;
    getRawAddressTransactions(request: pb_bchrpc_pb.GetRawAddressTransactionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetRawAddressTransactionsResponse) => void): grpc.ClientUnaryCall;
    getRawAddressTransactions(request: pb_bchrpc_pb.GetRawAddressTransactionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetRawAddressTransactionsResponse) => void): grpc.ClientUnaryCall;
    getAddressUnspentOutputs(request: pb_bchrpc_pb.GetAddressUnspentOutputsRequest, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetAddressUnspentOutputsResponse) => void): grpc.ClientUnaryCall;
    getAddressUnspentOutputs(request: pb_bchrpc_pb.GetAddressUnspentOutputsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetAddressUnspentOutputsResponse) => void): grpc.ClientUnaryCall;
    getAddressUnspentOutputs(request: pb_bchrpc_pb.GetAddressUnspentOutputsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetAddressUnspentOutputsResponse) => void): grpc.ClientUnaryCall;
    getUnspentOutput(request: pb_bchrpc_pb.GetUnspentOutputRequest, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetUnspentOutputResponse) => void): grpc.ClientUnaryCall;
    getUnspentOutput(request: pb_bchrpc_pb.GetUnspentOutputRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetUnspentOutputResponse) => void): grpc.ClientUnaryCall;
    getUnspentOutput(request: pb_bchrpc_pb.GetUnspentOutputRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetUnspentOutputResponse) => void): grpc.ClientUnaryCall;
    getMerkleProof(request: pb_bchrpc_pb.GetMerkleProofRequest, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetMerkleProofResponse) => void): grpc.ClientUnaryCall;
    getMerkleProof(request: pb_bchrpc_pb.GetMerkleProofRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetMerkleProofResponse) => void): grpc.ClientUnaryCall;
    getMerkleProof(request: pb_bchrpc_pb.GetMerkleProofRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetMerkleProofResponse) => void): grpc.ClientUnaryCall;
    getTokenMetadata(request: pb_bchrpc_pb.GetTokenMetadataRequest, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetTokenMetadataResponse) => void): grpc.ClientUnaryCall;
    getTokenMetadata(request: pb_bchrpc_pb.GetTokenMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetTokenMetadataResponse) => void): grpc.ClientUnaryCall;
    getTokenMetadata(request: pb_bchrpc_pb.GetTokenMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetTokenMetadataResponse) => void): grpc.ClientUnaryCall;
    getParsedSlpScript(request: pb_bchrpc_pb.GetParsedSlpScriptRequest, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetParsedSlpScriptResponse) => void): grpc.ClientUnaryCall;
    getParsedSlpScript(request: pb_bchrpc_pb.GetParsedSlpScriptRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetParsedSlpScriptResponse) => void): grpc.ClientUnaryCall;
    getParsedSlpScript(request: pb_bchrpc_pb.GetParsedSlpScriptRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetParsedSlpScriptResponse) => void): grpc.ClientUnaryCall;
    getTrustedSlpValidation(request: pb_bchrpc_pb.GetTrustedSlpValidationRequest, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetTrustedSlpValidationResponse) => void): grpc.ClientUnaryCall;
    getTrustedSlpValidation(request: pb_bchrpc_pb.GetTrustedSlpValidationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetTrustedSlpValidationResponse) => void): grpc.ClientUnaryCall;
    getTrustedSlpValidation(request: pb_bchrpc_pb.GetTrustedSlpValidationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetTrustedSlpValidationResponse) => void): grpc.ClientUnaryCall;
    getBip44HdAddress(request: pb_bchrpc_pb.GetBip44HdAddressRequest, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetBip44HdAddressResponse) => void): grpc.ClientUnaryCall;
    getBip44HdAddress(request: pb_bchrpc_pb.GetBip44HdAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetBip44HdAddressResponse) => void): grpc.ClientUnaryCall;
    getBip44HdAddress(request: pb_bchrpc_pb.GetBip44HdAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetBip44HdAddressResponse) => void): grpc.ClientUnaryCall;
    checkSlpTransaction(request: pb_bchrpc_pb.CheckSlpTransactionRequest, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.CheckSlpTransactionResponse) => void): grpc.ClientUnaryCall;
    checkSlpTransaction(request: pb_bchrpc_pb.CheckSlpTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.CheckSlpTransactionResponse) => void): grpc.ClientUnaryCall;
    checkSlpTransaction(request: pb_bchrpc_pb.CheckSlpTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.CheckSlpTransactionResponse) => void): grpc.ClientUnaryCall;
    submitTransaction(request: pb_bchrpc_pb.SubmitTransactionRequest, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.SubmitTransactionResponse) => void): grpc.ClientUnaryCall;
    submitTransaction(request: pb_bchrpc_pb.SubmitTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.SubmitTransactionResponse) => void): grpc.ClientUnaryCall;
    submitTransaction(request: pb_bchrpc_pb.SubmitTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.SubmitTransactionResponse) => void): grpc.ClientUnaryCall;
    subscribeTransactions(request: pb_bchrpc_pb.SubscribeTransactionsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<pb_bchrpc_pb.TransactionNotification>;
    subscribeTransactions(request: pb_bchrpc_pb.SubscribeTransactionsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<pb_bchrpc_pb.TransactionNotification>;
    subscribeTransactionStream(): grpc.ClientDuplexStream<pb_bchrpc_pb.SubscribeTransactionsRequest, pb_bchrpc_pb.TransactionNotification>;
    subscribeTransactionStream(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<pb_bchrpc_pb.SubscribeTransactionsRequest, pb_bchrpc_pb.TransactionNotification>;
    subscribeTransactionStream(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<pb_bchrpc_pb.SubscribeTransactionsRequest, pb_bchrpc_pb.TransactionNotification>;
    subscribeBlocks(request: pb_bchrpc_pb.SubscribeBlocksRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<pb_bchrpc_pb.BlockNotification>;
    subscribeBlocks(request: pb_bchrpc_pb.SubscribeBlocksRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<pb_bchrpc_pb.BlockNotification>;
}

export class bchrpcClient extends grpc.Client implements IbchrpcClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getMempoolInfo(request: pb_bchrpc_pb.GetMempoolInfoRequest, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetMempoolInfoResponse) => void): grpc.ClientUnaryCall;
    public getMempoolInfo(request: pb_bchrpc_pb.GetMempoolInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetMempoolInfoResponse) => void): grpc.ClientUnaryCall;
    public getMempoolInfo(request: pb_bchrpc_pb.GetMempoolInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetMempoolInfoResponse) => void): grpc.ClientUnaryCall;
    public getMempool(request: pb_bchrpc_pb.GetMempoolRequest, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetMempoolResponse) => void): grpc.ClientUnaryCall;
    public getMempool(request: pb_bchrpc_pb.GetMempoolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetMempoolResponse) => void): grpc.ClientUnaryCall;
    public getMempool(request: pb_bchrpc_pb.GetMempoolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetMempoolResponse) => void): grpc.ClientUnaryCall;
    public getBlockchainInfo(request: pb_bchrpc_pb.GetBlockchainInfoRequest, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetBlockchainInfoResponse) => void): grpc.ClientUnaryCall;
    public getBlockchainInfo(request: pb_bchrpc_pb.GetBlockchainInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetBlockchainInfoResponse) => void): grpc.ClientUnaryCall;
    public getBlockchainInfo(request: pb_bchrpc_pb.GetBlockchainInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetBlockchainInfoResponse) => void): grpc.ClientUnaryCall;
    public getBlockInfo(request: pb_bchrpc_pb.GetBlockInfoRequest, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetBlockInfoResponse) => void): grpc.ClientUnaryCall;
    public getBlockInfo(request: pb_bchrpc_pb.GetBlockInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetBlockInfoResponse) => void): grpc.ClientUnaryCall;
    public getBlockInfo(request: pb_bchrpc_pb.GetBlockInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetBlockInfoResponse) => void): grpc.ClientUnaryCall;
    public getBlock(request: pb_bchrpc_pb.GetBlockRequest, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetBlockResponse) => void): grpc.ClientUnaryCall;
    public getBlock(request: pb_bchrpc_pb.GetBlockRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetBlockResponse) => void): grpc.ClientUnaryCall;
    public getBlock(request: pb_bchrpc_pb.GetBlockRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetBlockResponse) => void): grpc.ClientUnaryCall;
    public getRawBlock(request: pb_bchrpc_pb.GetRawBlockRequest, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetRawBlockResponse) => void): grpc.ClientUnaryCall;
    public getRawBlock(request: pb_bchrpc_pb.GetRawBlockRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetRawBlockResponse) => void): grpc.ClientUnaryCall;
    public getRawBlock(request: pb_bchrpc_pb.GetRawBlockRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetRawBlockResponse) => void): grpc.ClientUnaryCall;
    public getBlockFilter(request: pb_bchrpc_pb.GetBlockFilterRequest, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetBlockFilterResponse) => void): grpc.ClientUnaryCall;
    public getBlockFilter(request: pb_bchrpc_pb.GetBlockFilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetBlockFilterResponse) => void): grpc.ClientUnaryCall;
    public getBlockFilter(request: pb_bchrpc_pb.GetBlockFilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetBlockFilterResponse) => void): grpc.ClientUnaryCall;
    public getHeaders(request: pb_bchrpc_pb.GetHeadersRequest, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetHeadersResponse) => void): grpc.ClientUnaryCall;
    public getHeaders(request: pb_bchrpc_pb.GetHeadersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetHeadersResponse) => void): grpc.ClientUnaryCall;
    public getHeaders(request: pb_bchrpc_pb.GetHeadersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetHeadersResponse) => void): grpc.ClientUnaryCall;
    public getTransaction(request: pb_bchrpc_pb.GetTransactionRequest, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetTransactionResponse) => void): grpc.ClientUnaryCall;
    public getTransaction(request: pb_bchrpc_pb.GetTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetTransactionResponse) => void): grpc.ClientUnaryCall;
    public getTransaction(request: pb_bchrpc_pb.GetTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetTransactionResponse) => void): grpc.ClientUnaryCall;
    public getRawTransaction(request: pb_bchrpc_pb.GetRawTransactionRequest, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetRawTransactionResponse) => void): grpc.ClientUnaryCall;
    public getRawTransaction(request: pb_bchrpc_pb.GetRawTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetRawTransactionResponse) => void): grpc.ClientUnaryCall;
    public getRawTransaction(request: pb_bchrpc_pb.GetRawTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetRawTransactionResponse) => void): grpc.ClientUnaryCall;
    public getAddressTransactions(request: pb_bchrpc_pb.GetAddressTransactionsRequest, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetAddressTransactionsResponse) => void): grpc.ClientUnaryCall;
    public getAddressTransactions(request: pb_bchrpc_pb.GetAddressTransactionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetAddressTransactionsResponse) => void): grpc.ClientUnaryCall;
    public getAddressTransactions(request: pb_bchrpc_pb.GetAddressTransactionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetAddressTransactionsResponse) => void): grpc.ClientUnaryCall;
    public getRawAddressTransactions(request: pb_bchrpc_pb.GetRawAddressTransactionsRequest, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetRawAddressTransactionsResponse) => void): grpc.ClientUnaryCall;
    public getRawAddressTransactions(request: pb_bchrpc_pb.GetRawAddressTransactionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetRawAddressTransactionsResponse) => void): grpc.ClientUnaryCall;
    public getRawAddressTransactions(request: pb_bchrpc_pb.GetRawAddressTransactionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetRawAddressTransactionsResponse) => void): grpc.ClientUnaryCall;
    public getAddressUnspentOutputs(request: pb_bchrpc_pb.GetAddressUnspentOutputsRequest, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetAddressUnspentOutputsResponse) => void): grpc.ClientUnaryCall;
    public getAddressUnspentOutputs(request: pb_bchrpc_pb.GetAddressUnspentOutputsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetAddressUnspentOutputsResponse) => void): grpc.ClientUnaryCall;
    public getAddressUnspentOutputs(request: pb_bchrpc_pb.GetAddressUnspentOutputsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetAddressUnspentOutputsResponse) => void): grpc.ClientUnaryCall;
    public getUnspentOutput(request: pb_bchrpc_pb.GetUnspentOutputRequest, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetUnspentOutputResponse) => void): grpc.ClientUnaryCall;
    public getUnspentOutput(request: pb_bchrpc_pb.GetUnspentOutputRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetUnspentOutputResponse) => void): grpc.ClientUnaryCall;
    public getUnspentOutput(request: pb_bchrpc_pb.GetUnspentOutputRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetUnspentOutputResponse) => void): grpc.ClientUnaryCall;
    public getMerkleProof(request: pb_bchrpc_pb.GetMerkleProofRequest, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetMerkleProofResponse) => void): grpc.ClientUnaryCall;
    public getMerkleProof(request: pb_bchrpc_pb.GetMerkleProofRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetMerkleProofResponse) => void): grpc.ClientUnaryCall;
    public getMerkleProof(request: pb_bchrpc_pb.GetMerkleProofRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetMerkleProofResponse) => void): grpc.ClientUnaryCall;
    public getTokenMetadata(request: pb_bchrpc_pb.GetTokenMetadataRequest, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetTokenMetadataResponse) => void): grpc.ClientUnaryCall;
    public getTokenMetadata(request: pb_bchrpc_pb.GetTokenMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetTokenMetadataResponse) => void): grpc.ClientUnaryCall;
    public getTokenMetadata(request: pb_bchrpc_pb.GetTokenMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetTokenMetadataResponse) => void): grpc.ClientUnaryCall;
    public getParsedSlpScript(request: pb_bchrpc_pb.GetParsedSlpScriptRequest, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetParsedSlpScriptResponse) => void): grpc.ClientUnaryCall;
    public getParsedSlpScript(request: pb_bchrpc_pb.GetParsedSlpScriptRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetParsedSlpScriptResponse) => void): grpc.ClientUnaryCall;
    public getParsedSlpScript(request: pb_bchrpc_pb.GetParsedSlpScriptRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetParsedSlpScriptResponse) => void): grpc.ClientUnaryCall;
    public getTrustedSlpValidation(request: pb_bchrpc_pb.GetTrustedSlpValidationRequest, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetTrustedSlpValidationResponse) => void): grpc.ClientUnaryCall;
    public getTrustedSlpValidation(request: pb_bchrpc_pb.GetTrustedSlpValidationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetTrustedSlpValidationResponse) => void): grpc.ClientUnaryCall;
    public getTrustedSlpValidation(request: pb_bchrpc_pb.GetTrustedSlpValidationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetTrustedSlpValidationResponse) => void): grpc.ClientUnaryCall;
    public getBip44HdAddress(request: pb_bchrpc_pb.GetBip44HdAddressRequest, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetBip44HdAddressResponse) => void): grpc.ClientUnaryCall;
    public getBip44HdAddress(request: pb_bchrpc_pb.GetBip44HdAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetBip44HdAddressResponse) => void): grpc.ClientUnaryCall;
    public getBip44HdAddress(request: pb_bchrpc_pb.GetBip44HdAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.GetBip44HdAddressResponse) => void): grpc.ClientUnaryCall;
    public checkSlpTransaction(request: pb_bchrpc_pb.CheckSlpTransactionRequest, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.CheckSlpTransactionResponse) => void): grpc.ClientUnaryCall;
    public checkSlpTransaction(request: pb_bchrpc_pb.CheckSlpTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.CheckSlpTransactionResponse) => void): grpc.ClientUnaryCall;
    public checkSlpTransaction(request: pb_bchrpc_pb.CheckSlpTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.CheckSlpTransactionResponse) => void): grpc.ClientUnaryCall;
    public submitTransaction(request: pb_bchrpc_pb.SubmitTransactionRequest, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.SubmitTransactionResponse) => void): grpc.ClientUnaryCall;
    public submitTransaction(request: pb_bchrpc_pb.SubmitTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.SubmitTransactionResponse) => void): grpc.ClientUnaryCall;
    public submitTransaction(request: pb_bchrpc_pb.SubmitTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pb_bchrpc_pb.SubmitTransactionResponse) => void): grpc.ClientUnaryCall;
    public subscribeTransactions(request: pb_bchrpc_pb.SubscribeTransactionsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<pb_bchrpc_pb.TransactionNotification>;
    public subscribeTransactions(request: pb_bchrpc_pb.SubscribeTransactionsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<pb_bchrpc_pb.TransactionNotification>;
    public subscribeTransactionStream(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<pb_bchrpc_pb.SubscribeTransactionsRequest, pb_bchrpc_pb.TransactionNotification>;
    public subscribeTransactionStream(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<pb_bchrpc_pb.SubscribeTransactionsRequest, pb_bchrpc_pb.TransactionNotification>;
    public subscribeBlocks(request: pb_bchrpc_pb.SubscribeBlocksRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<pb_bchrpc_pb.BlockNotification>;
    public subscribeBlocks(request: pb_bchrpc_pb.SubscribeBlocksRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<pb_bchrpc_pb.BlockNotification>;
}
