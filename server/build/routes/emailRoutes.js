"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var emailController_1 = __importDefault(require("../controllers/emailController"));
var EmailRoutes = /** @class */ (function () {
    function EmailRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    EmailRoutes.prototype.config = function () {
        this.router.post('/', emailController_1.default.sendPasswordVerify);
    };
    return EmailRoutes;
}());
var emailRoutes = new EmailRoutes();
exports.default = emailRoutes.router;
