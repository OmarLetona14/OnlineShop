"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var loginController_1 = __importDefault(require("../controllers/loginController"));
var LoginRoutes = /** @class */ (function () {
    function LoginRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    LoginRoutes.prototype.config = function () {
        this.router.post('/', loginController_1.default.getLogin);
    };
    return LoginRoutes;
}());
var loginRoutes = new LoginRoutes();
exports.default = loginRoutes.router;
