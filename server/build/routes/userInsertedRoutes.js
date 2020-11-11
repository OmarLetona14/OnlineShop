"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userInsertedController_1 = __importDefault(require("../controllers/userInsertedController"));
var UserInsertedRoutes = /** @class */ (function () {
    function UserInsertedRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    UserInsertedRoutes.prototype.config = function () {
        this.router.post('/', userInsertedController_1.default.getUserByInserted);
    };
    return UserInsertedRoutes;
}());
var userInsertedRoutes = new UserInsertedRoutes();
exports.default = userInsertedRoutes.router;
