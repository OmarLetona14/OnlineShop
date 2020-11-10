"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var recoveryController_1 = __importDefault(require("../controllers/recoveryController"));
var RecoveryRoutes = /** @class */ (function () {
    function RecoveryRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    RecoveryRoutes.prototype.config = function () {
        this.router.post('/', recoveryController_1.default.changePassword);
    };
    return RecoveryRoutes;
}());
var recoveryRoutes = new RecoveryRoutes();
exports.default = recoveryRoutes.router;
