"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mostComplainedController_1 = __importDefault(require("../controllers/mostComplainedController"));
var MostComplainedRoutes = /** @class */ (function () {
    function MostComplainedRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    MostComplainedRoutes.prototype.config = function () {
        this.router.get('/', mostComplainedController_1.default.getMostComplained);
    };
    return MostComplainedRoutes;
}());
var mostComplainedRoutes = new MostComplainedRoutes();
exports.default = mostComplainedRoutes.router;
