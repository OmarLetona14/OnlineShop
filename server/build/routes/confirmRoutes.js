"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var confirmController_1 = __importDefault(require("../controllers/confirmController"));
var ConfirmRoutes = /** @class */ (function () {
    function ConfirmRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    ConfirmRoutes.prototype.config = function () {
        this.router.get('/:id', confirmController_1.default.confirmUser);
    };
    return ConfirmRoutes;
}());
var confirmRoutes = new ConfirmRoutes();
exports.default = confirmRoutes.router;
