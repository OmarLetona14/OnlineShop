"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mostSelledController_1 = __importDefault(require("../controllers/mostSelledController"));
var MostSelledRoutes = /** @class */ (function () {
    function MostSelledRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    MostSelledRoutes.prototype.config = function () {
        this.router.get('/', mostSelledController_1.default.getMostSelled);
    };
    return MostSelledRoutes;
}());
var mostSelledRoutes = new MostSelledRoutes();
exports.default = mostSelledRoutes.router;
