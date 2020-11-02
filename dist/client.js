"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcClient = void 0;
var fs = __importStar(require("fs"));
var grpc = __importStar(require("grpc"));
var bchrpc_grpc = __importStar(require("../pb/bchrpc_grpc_pb"));
var bchrpc = __importStar(require("../pb/bchrpc_pb"));
var GrpcClient = /** @class */ (function () {
    function GrpcClient(_a) {
        var _b = _a === void 0 ? {} : _a, url = _b.url, rootCertPath = _b.rootCertPath, testnet = _b.testnet, options = _b.options;
        var creds = grpc.credentials.createSsl();
        if (rootCertPath) {
            var rootCert = fs.readFileSync(rootCertPath);
            creds = grpc.credentials.createSsl(rootCert);
        }
        if (!url && !testnet) {
            url = "bchd.greyh.at:8335";
        }
        else if (!url) {
            url = "bchd-testnet.greyh.at:18335";
        }
        if (!options) {
            options = {
                "grpc.max_receive_message_length": -1,
            };
        }
        this.client = new bchrpc_grpc.bchrpcClient(url, creds, options);
    }
    GrpcClient.prototype.getMempoolInfo = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.client.getMempoolInfo(new bchrpc.GetMempoolInfoRequest(), function (err, data) {
                if (err !== null) {
                    reject(err);
                }
                else {
                    resolve(data);
                }
            });
        });
    };
    GrpcClient.prototype.getRawMempool = function (_a) {
        var _this = this;
        var fullTransactions = (_a === void 0 ? {} : _a).fullTransactions;
        var req = new bchrpc.GetMempoolRequest();
        if (fullTransactions) {
            req.setFullTransactions(true);
        }
        else {
            req.setFullTransactions(false);
        }
        return new Promise(function (resolve, reject) {
            _this.client.getMempool(req, function (err, data) {
                if (err !== null) {
                    reject(err);
                }
                else {
                    resolve(data);
                }
            });
        });
    };
    GrpcClient.prototype.getRawTransaction = function (_a) {
        var _this = this;
        var hash = _a.hash, reversedHashOrder = _a.reversedHashOrder;
        var req = new bchrpc.GetRawTransactionRequest();
        if (reversedHashOrder) {
            req.setHash(new Uint8Array(hash.match(/.{1,2}/g).map(function (byte) { return parseInt(byte, 16); })).reverse());
        }
        else {
            req.setHash(new Uint8Array(hash.match(/.{1,2}/g).map(function (byte) { return parseInt(byte, 16); })));
        }
        return new Promise(function (resolve, reject) {
            _this.client.getRawTransaction(req, function (err, data) {
                if (err !== null) {
                    reject(err);
                }
                else {
                    resolve(data);
                }
            });
        });
    };
    GrpcClient.prototype.getTransaction = function (_a) {
        var _this = this;
        var hash = _a.hash, reversedHashOrder = _a.reversedHashOrder, _b = _a.includeTokenMetadata, includeTokenMetadata = _b === void 0 ? true : _b;
        var req = new bchrpc.GetTransactionRequest();
        if (includeTokenMetadata) {
            req.setIncludeTokenMetadata(true);
        }
        if (reversedHashOrder) {
            req.setHash(new Uint8Array(hash.match(/.{1,2}/g).map(function (byte) { return parseInt(byte, 16); })).reverse());
        }
        else {
            req.setHash(new Uint8Array(hash.match(/.{1,2}/g).map(function (byte) { return parseInt(byte, 16); })));
        }
        return new Promise(function (resolve, reject) {
            _this.client.getTransaction(req, function (err, data) {
                if (err !== null) {
                    reject(err);
                }
                else {
                    resolve(data);
                }
            });
        });
    };
    GrpcClient.prototype.getAddressTransactions = function (_a) {
        var _this = this;
        var address = _a.address, nbSkip = _a.nbSkip, nbFetch = _a.nbFetch, height = _a.height, hash = _a.hash, reversedHashOrder = _a.reversedHashOrder;
        var req = new bchrpc.GetAddressTransactionsRequest();
        if (nbSkip) {
            req.setNbSkip(nbSkip);
        }
        if (nbFetch) {
            req.setNbFetch(nbFetch);
        }
        if (height) {
            req.setHeight(height);
        }
        if (hash) {
            if (reversedHashOrder) {
                req.setHash(new Uint8Array(hash.match(/.{1,2}/g).map(function (byte) { return parseInt(byte, 16); })).reverse());
            }
            else {
                req.setHash(new Uint8Array(hash.match(/.{1,2}/g).map(function (byte) { return parseInt(byte, 16); })));
            }
        }
        req.setAddress(address);
        return new Promise(function (resolve, reject) {
            _this.client.getAddressTransactions(req, function (err, data) {
                if (err !== null) {
                    reject(err);
                }
                else {
                    resolve(data);
                }
            });
        });
    };
    GrpcClient.prototype.getUnspentOutput = function (_a) {
        var _this = this;
        var hash = _a.hash, vout = _a.vout, reversedHashOrder = _a.reversedHashOrder, includeMempool = _a.includeMempool, _b = _a.includeTokenMetadata, includeTokenMetadata = _b === void 0 ? true : _b;
        var req = new bchrpc.GetUnspentOutputRequest();
        if (includeTokenMetadata) {
            req.setIncludeTokenMetadata(true);
        }
        if (includeMempool) {
            req.setIncludeMempool(true);
        }
        if (reversedHashOrder) {
            req.setHash(new Uint8Array(hash.match(/.{1,2}/g).map(function (byte) { return parseInt(byte, 16); })).reverse());
        }
        else {
            req.setHash(new Uint8Array(hash.match(/.{1,2}/g).map(function (byte) { return parseInt(byte, 16); })));
        }
        req.setIndex(vout);
        return new Promise(function (resolve, reject) {
            _this.client.getUnspentOutput(req, function (err, data) {
                if (err !== null) {
                    reject(err);
                }
                else {
                    resolve(data);
                }
            });
        });
    };
    GrpcClient.prototype.getAddressUtxos = function (_a) {
        var _this = this;
        var address = _a.address, includeMempool = _a.includeMempool, _b = _a.includeTokenMetadata, includeTokenMetadata = _b === void 0 ? true : _b;
        var req = new bchrpc.GetAddressUnspentOutputsRequest();
        if (includeTokenMetadata) {
            req.setIncludeTokenMetadata(true);
        }
        req.setAddress(address);
        if (includeMempool) {
            req.setIncludeMempool(true);
        }
        return new Promise(function (resolve, reject) {
            _this.client.getAddressUnspentOutputs(req, function (err, data) {
                if (err !== null) {
                    reject(err);
                }
                else {
                    resolve(data);
                }
            });
        });
    };
    GrpcClient.prototype.getRawBlock = function (_a) {
        var _this = this;
        var index = _a.index, hash = _a.hash, reversedHashOrder = _a.reversedHashOrder;
        var req = new bchrpc.GetRawBlockRequest();
        if (index !== null && index !== undefined) {
            req.setHeight(index);
        }
        else if (hash) {
            if (reversedHashOrder) {
                req.setHash(new Uint8Array(hash.match(/.{1,2}/g).map(function (byte) { return parseInt(byte, 16); })).reverse());
            }
            else {
                req.setHash(new Uint8Array(hash.match(/.{1,2}/g).map(function (byte) { return parseInt(byte, 16); })));
            }
        }
        else {
            throw Error("No index or hash provided for block");
        }
        return new Promise(function (resolve, reject) {
            _this.client.getRawBlock(req, function (err, data) {
                if (err !== null) {
                    reject(err);
                }
                else {
                    resolve(data);
                }
            });
        });
    };
    GrpcClient.prototype.getBlock = function (_a) {
        var _this = this;
        var index = _a.index, hash = _a.hash, reversedHashOrder = _a.reversedHashOrder, fullTransactions = _a.fullTransactions;
        var req = new bchrpc.GetBlockRequest();
        if (index !== null && index !== undefined) {
            req.setHeight(index);
        }
        else if (hash) {
            if (reversedHashOrder) {
                req.setHash(new Uint8Array(hash.match(/.{1,2}/g).map(function (byte) { return parseInt(byte, 16); })).reverse());
            }
            else {
                req.setHash(new Uint8Array(hash.match(/.{1,2}/g).map(function (byte) { return parseInt(byte, 16); })));
            }
        }
        else {
            throw Error("No index or hash provided for block");
        }
        if (fullTransactions) {
            req.setFullTransactions(true);
        }
        return new Promise(function (resolve, reject) {
            _this.client.getBlock(req, function (err, data) {
                if (err !== null) {
                    reject(err);
                }
                else {
                    resolve(data);
                }
            });
        });
    };
    GrpcClient.prototype.getBlockInfo = function (_a) {
        var _this = this;
        var index = _a.index, hash = _a.hash, reversedHashOrder = _a.reversedHashOrder;
        var req = new bchrpc.GetBlockInfoRequest();
        if (index !== null && index !== undefined) {
            req.setHeight(index);
        }
        else if (hash) {
            if (reversedHashOrder) {
                req.setHash(new Uint8Array(hash.match(/.{1,2}/g).map(function (byte) { return parseInt(byte, 16); })).reverse());
            }
            else {
                req.setHash(new Uint8Array(hash.match(/.{1,2}/g).map(function (byte) { return parseInt(byte, 16); })));
            }
        }
        else {
            throw Error("No index or hash provided for block");
        }
        return new Promise(function (resolve, reject) {
            _this.client.getBlockInfo(req, function (err, data) {
                if (err !== null) {
                    reject(err);
                }
                else {
                    resolve(data);
                }
            });
        });
    };
    GrpcClient.prototype.getBlockchainInfo = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.client.getBlockchainInfo(new bchrpc.GetBlockchainInfoRequest(), function (err, data) {
                if (err !== null) {
                    reject(err);
                }
                else {
                    resolve(data);
                }
            });
        });
    };
    GrpcClient.prototype.getBlockHeaders = function (stopHash) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var req = new bchrpc.GetHeadersRequest();
            req.setStopHash(new Uint8Array(stopHash.match(/.{1,2}/g).map(function (byte) { return parseInt(byte, 16); })).reverse());
            _this.client.getHeaders(req, function (err, data) {
                if (err !== null) {
                    reject(err);
                }
                else {
                    resolve(data);
                }
            });
        });
    };
    GrpcClient.prototype.submitTransaction = function (_a) {
        var txnBuf = _a.txnBuf, txnHex = _a.txnHex, txn = _a.txn, requiredSlpBurns = _a.requiredSlpBurns, _b = _a.skipSlpValidityChecks, skipSlpValidityChecks = _b === void 0 ? true : _b;
        return __awaiter(this, void 0, void 0, function () {
            var tx, req, _i, requiredSlpBurns_1, burn;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        req = new bchrpc.SubmitTransactionRequest();
                        if (txnBuf) {
                            tx = txnBuf.toString("base64");
                        }
                        else if (txnHex) {
                            tx = Buffer.from(txnHex, "hex").toString("base64");
                        }
                        else if (txn) {
                            tx = txn;
                        }
                        else {
                            throw Error("Most provide either Hex string, Buffer, or Uint8Array");
                        }
                        if (!!skipSlpValidityChecks) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._checkForSlpIndex()];
                    case 1:
                        if (!(_c.sent())) {
                            throw Error("Host BCHD instance does not have SLP indexing enabled.");
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        req.setSkipSlpValidityCheck(true);
                        _c.label = 3;
                    case 3:
                        if (requiredSlpBurns) {
                            for (_i = 0, requiredSlpBurns_1 = requiredSlpBurns; _i < requiredSlpBurns_1.length; _i++) {
                                burn = requiredSlpBurns_1[_i];
                                req.addRequiredSlpBurns(burn);
                            }
                        }
                        req.setTransaction(tx);
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                _this.client.submitTransaction(req, function (err, data) {
                                    if (err !== null) {
                                        reject(err);
                                    }
                                    else {
                                        resolve(data);
                                    }
                                });
                            })];
                }
            });
        });
    };
    GrpcClient.prototype.subscribeTransactions = function (_a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, includeMempoolAcceptance = _b.includeMempoolAcceptance, includeBlockAcceptance = _b.includeBlockAcceptance, includeSerializedTxn = _b.includeSerializedTxn, includeOnlySlp = _b.includeOnlySlp, slpTokenIds = _b.slpTokenIds, addresses = _b.addresses, outpoints = _b.outpoints;
        return new Promise(function (resolve, reject) {
            var req = new bchrpc.SubscribeTransactionsRequest();
            includeMempoolAcceptance ? req.setIncludeMempool(true) : req.setIncludeMempool(false);
            includeBlockAcceptance ? req.setIncludeInBlock(true) : req.setIncludeInBlock(false);
            includeSerializedTxn ? req.setSerializeTx(true) : req.setSerializeTx(false);
            var filter = new bchrpc.TransactionFilter();
            filter.setAllTransactions(true);
            if (addresses) {
                for (var _i = 0, addresses_1 = addresses; _i < addresses_1.length; _i++) {
                    var addr = addresses_1[_i];
                    filter.addAddresses(addr);
                    filter.setAllTransactions(false);
                }
                if (addresses.length === 0) {
                    addresses = undefined;
                }
            }
            if (outpoints) {
                for (var _a = 0, outpoints_1 = outpoints; _a < outpoints_1.length; _a++) {
                    var outpoint = outpoints_1[_a];
                    var o = new bchrpc.Transaction.Input.Outpoint();
                    o.setHash(outpoint.txid.reverse());
                    o.setIndex(outpoint.vout);
                    filter.addOutpoints(o);
                    filter.setAllTransactions(false);
                }
                if (outpoints.length === 0) {
                    outpoints = undefined;
                }
            }
            if (slpTokenIds && slpTokenIds.length > 0) {
                filter.setAllTransactions(false);
                filter.setAllSlpTransactions(false);
                slpTokenIds.forEach(function (tokenId) { return filter.addSlpTokenIds(Buffer.from(tokenId, "hex")); });
            }
            else if (includeOnlySlp) {
                filter.setAllTransactions(false);
                filter.setAllSlpTransactions(true);
            }
            req.setSubscribe(filter);
            try {
                resolve(_this.client.subscribeTransactions(req));
            }
            catch (err) {
                reject(err);
            }
        });
    };
    GrpcClient.prototype.subscribeBlocks = function (_a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, includeSerializedBlock = _b.includeSerializedBlock, includeTxnHashes = _b.includeTxnHashes, includeTxnData = _b.includeTxnData;
        return new Promise(function (resolve, reject) {
            var req = new bchrpc.SubscribeBlocksRequest();
            includeTxnHashes ? req.setFullBlock(true) : req.setFullBlock(false);
            includeTxnData ? req.setFullTransactions(true) : req.setFullTransactions(false);
            includeSerializedBlock ? req.setSerializeBlock(true) : req.setSerializeBlock(false);
            try {
                resolve(_this.client.subscribeBlocks(req));
            }
            catch (err) {
                reject(err);
            }
        });
    };
    GrpcClient.prototype.checkSlpTransaction = function (_a) {
        var _b = _a === void 0 ? {} : _a, txnBuf = _b.txnBuf, txnHex = _b.txnHex, txn = _b.txn, requiredSlpBurns = _b.requiredSlpBurns;
        return __awaiter(this, void 0, void 0, function () {
            var tx, req, _i, requiredSlpBurns_2, burn;
            var _this = this;
            return __generator(this, function (_c) {
                req = new bchrpc.CheckSlpTransactionRequest();
                if (txnBuf) {
                    tx = txnBuf.toString("base64");
                }
                else if (txnHex) {
                    tx = Buffer.from(txnHex, "hex").toString("base64");
                }
                else if (txn) {
                    tx = txn;
                }
                else {
                    throw Error("Most provide either Hex string, Buffer, or Uint8Array");
                }
                if (requiredSlpBurns) {
                    for (_i = 0, requiredSlpBurns_2 = requiredSlpBurns; _i < requiredSlpBurns_2.length; _i++) {
                        burn = requiredSlpBurns_2[_i];
                        req.addRequiredSlpBurns(burn);
                    }
                }
                req.setTransaction(tx);
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.client.checkSlpTransaction(req, function (err, data) {
                            if (err !== null) {
                                reject(err);
                            }
                            else {
                                resolve(data);
                            }
                        });
                    })];
            });
        });
    };
    GrpcClient.prototype.getTokenMetadata = function (tokenIds) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var req = new bchrpc.GetTokenMetadataRequest();
            if (typeof tokenIds[0] === "string") {
                tokenIds.forEach(function (id) { return req.addTokenIds(Buffer.from(id, "hex")); });
            }
            else {
                tokenIds.forEach(function (id) { return req.addTokenIds(id); });
            }
            _this.client.getTokenMetadata(req, function (err, data) {
                if (err !== null) {
                    reject(err);
                }
                else {
                    resolve(data);
                }
            });
        });
    };
    GrpcClient.prototype.getTrustedSlpValidation = function (_a) {
        var _this = this;
        var txos = _a.txos, reversedHashOrder = _a.reversedHashOrder;
        return new Promise(function (resolve, reject) {
            var req = new bchrpc.GetTrustedSlpValidationRequest();
            // add txos
            for (var _i = 0, txos_1 = txos; _i < txos_1.length; _i++) {
                var txo = txos_1[_i];
                var query = new bchrpc.GetTrustedSlpValidationRequest.Query();
                var hash = Buffer.from(txo.hash, "hex");
                if (reversedHashOrder) {
                    hash = hash.slice().reverse();
                }
                query.setPrevOutHash(hash);
                query.setPrevOutVout(txo.vout);
                req.addQueries(query);
            }
            _this.client.getTrustedSlpValidation(req, function (err, data) {
                if (err !== null) {
                    reject(err);
                }
                else {
                    resolve(data);
                }
            });
        });
    };
    GrpcClient.prototype.getBip44HdAddress = function (_a) {
        var _this = this;
        var xpub = _a.xpub, isChange = _a.isChange, addressIndex = _a.addressIndex;
        return new Promise(function (resolve, reject) {
            var req = new bchrpc.GetBip44HdAddressRequest();
            req.setXpub(xpub);
            req.setChange(isChange);
            req.setAddressIndex(addressIndex);
            _this.client.getBip44HdAddress(req, function (err, data) {
                if (err !== null) {
                    reject(err);
                }
                else {
                    resolve(data);
                }
            });
        });
    };
    GrpcClient.prototype.getParsedSlpScript = function (script) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var req = new bchrpc.GetParsedSlpScriptRequest();
            if (typeof script === "string") {
                req.setSlpOpreturnScript(Buffer.from(script, "hex"));
            }
            else {
                req.setSlpOpreturnScript(script);
            }
            _this.client.getParsedSlpScript(req, function (err, data) {
                if (err !== null) {
                    reject(err);
                }
                else {
                    resolve(data);
                }
            });
        });
    };
    GrpcClient.prototype._checkForSlpIndex = function () {
        return __awaiter(this, void 0, void 0, function () {
            var info;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this._HAS_SLP_INDEX !== undefined)) return [3 /*break*/, 1];
                        return [2 /*return*/, this._HAS_SLP_INDEX];
                    case 1: return [4 /*yield*/, this.getBlockchainInfo()];
                    case 2:
                        info = _a.sent();
                        this._HAS_SLP_INDEX = info.getSlpIndex();
                        return [2 /*return*/, this._HAS_SLP_INDEX];
                }
            });
        });
    };
    return GrpcClient;
}());
exports.GrpcClient = GrpcClient;
//# sourceMappingURL=client.js.map