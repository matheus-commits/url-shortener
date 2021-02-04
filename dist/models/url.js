"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var urlSchema = new mongoose_1.default.Schema({
    longUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
        default: Date.now()
    },
    urlCode: {
        type: String,
        require: true
    }
});
exports.default = mongoose_1.default.model('Url', urlSchema);
