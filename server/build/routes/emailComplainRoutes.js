"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var emailComplainController_1 = __importDefault(require("../controllers/emailComplainController"));
var EmailComplainController = /** @class */ (function () {
    function EmailComplainController() {
        this.router = express_1.Router();
        this.config();
    }
    EmailComplainController.prototype.config = function () {
        this.router.post('/', emailComplainController_1.default.sendComplain);
    };
    return EmailComplainController;
}());
var emailComplainRoutes = new EmailComplainController();
exports.default = emailComplainRoutes.router;
