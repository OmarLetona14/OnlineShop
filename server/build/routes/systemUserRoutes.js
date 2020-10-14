"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const systemUserController_1 = __importDefault(require("../controllers/systemUserController"));
class SystemUserRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', systemUserController_1.default.getUser);
    }
}
const systemUserRoutes = new SystemUserRoutes();
exports.default = systemUserRoutes.router;
