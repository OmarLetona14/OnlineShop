"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mostPublicatedController_1 = __importDefault(require("../controllers/mostPublicatedController"));
var MostPublicatedRoutes = /** @class */ (function () {
    function MostPublicatedRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    MostPublicatedRoutes.prototype.config = function () {
        this.router.get('/', mostPublicatedController_1.default.getMostPublicated);
    };
    return MostPublicatedRoutes;
}());
var mostPublicatedRoutes = new MostPublicatedRoutes();
exports.default = mostPublicatedRoutes.router;
