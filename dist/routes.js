"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UrlShortenController_1 = __importDefault(require("./controllers/UrlShortenController"));
var UrlRedirectController_1 = __importDefault(require("./controllers/UrlRedirectController"));
var routes = express_1.Router();
var shortenController = new UrlShortenController_1.default();
var redirectController = new UrlRedirectController_1.default();
//@route   POST /api/url/shorten
//@desc    Create short url
routes.post('/shorten', shortenController.index);
//@route GET /api/url/:code
//@desc Redirect to original url
routes.get('/:code', redirectController.index);
exports.default = routes;
