"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var systemUserController_1 = __importDefault(require("../controllers/systemUserController"));
var SystemUserRoutes = /** @class */ (function () {
    function SystemUserRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    SystemUserRoutes.prototype.config = function () {
        this.router.get('/', systemUserController_1.default.getAll);
        this.router.get('/:id', systemUserController_1.default.getOne);
        this.router.post('/', systemUserController_1.default.insert);
        this.router.put('/:id', systemUserController_1.default.edit);
        this.router.delete('/:id', systemUserController_1.default.delete);
    };
    return SystemUserRoutes;
}());
var systemUserRoutes = new SystemUserRoutes();
exports.default = systemUserRoutes.router;
