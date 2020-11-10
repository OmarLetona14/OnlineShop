"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var emailConfirmation_1 = __importDefault(require("../controllers/emailConfirmation"));
var EmailConfirmationRoutes = /** @class */ (function () {
    function EmailConfirmationRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    EmailConfirmationRoutes.prototype.config = function () {
        this.router.post('/', emailConfirmation_1.default.sendConfirmUser);
    };
    return EmailConfirmationRoutes;
}());
var emailConfirmationRoutes = new EmailConfirmationRoutes();
exports.default = emailConfirmationRoutes.router;
