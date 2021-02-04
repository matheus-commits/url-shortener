"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var valid_url_1 = __importDefault(require("valid-url"));
var shortid_1 = __importDefault(require("shortid"));
var url_1 = __importDefault(require("../models/url"));
var UrlShortenController = /** @class */ (function () {
    function UrlShortenController() {
    }
    UrlShortenController.prototype.index = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var longUrl, urlCode, url, shortUrl, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        longUrl = req.body.longUrl;
                        urlCode = shortid_1.default.generate();
                        if (!valid_url_1.default.isUri(longUrl)) return [3 /*break*/, 8];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, url_1.default.findOne({ longUrl: longUrl })];
                    case 2:
                        url = _a.sent();
                        if (!url) return [3 /*break*/, 3];
                        res.json(url);
                        return [3 /*break*/, 5];
                    case 3:
                        shortUrl = 'http://localhost:3333' + '/api/url' + '/' + urlCode;
                        url = new url_1.default({
                            longUrl: longUrl,
                            shortUrl: shortUrl,
                            urlCode: urlCode,
                            date: new Date()
                        });
                        return [4 /*yield*/, url.save()];
                    case 4:
                        _a.sent();
                        res.json(url);
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        err_1 = _a.sent();
                        console.log(err_1);
                        res.status(500).json('Server error');
                        return [3 /*break*/, 7];
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        res.status(401).json('Invalid long url');
                        _a.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    return UrlShortenController;
}());
exports.default = UrlShortenController;
