"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var mongoose_1 = __importDefault(require("mongoose"));
var dotenv_1 = __importDefault(require("dotenv"));
var routes_1 = __importDefault(require("./routes"));
dotenv_1.default.config();
mongoose_1.default.connect("" + process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, function () { return console.log("Connected to mongoDB..."); });
var app = express_1.default();
app.use(express_1.default.json());
app.use('/api/url', routes_1.default);
app.use(cors_1.default);
app.listen(3333, function () { return console.log("Server up and running..."); });
