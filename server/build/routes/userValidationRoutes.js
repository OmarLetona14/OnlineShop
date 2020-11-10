"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userValidationController_1 = __importDefault(require("../controllers/userValidationController"));
var UserValidationRoutes = /** @class */ (function () {
    function UserValidationRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    UserValidationRoutes.prototype.config = function () {
        this.router.post('/', userValidationController_1.default.getUserByEmail);
    };
    return UserValidationRoutes;
}());
var userValidationRoutes = new UserValidationRoutes();
exports.default = userValidationRoutes.router;
