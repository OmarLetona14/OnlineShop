"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var logController_1 = __importDefault(require("../controllers/logController"));
var LogRoutes = /** @class */ (function () {
    function LogRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    LogRoutes.prototype.config = function () {
        this.router.get('/', logController_1.default.getAll);
        this.router.post('/', logController_1.default.insert);
    };
    return LogRoutes;
}());
var logRoutes = new LogRoutes();
exports.default = logRoutes.router;
