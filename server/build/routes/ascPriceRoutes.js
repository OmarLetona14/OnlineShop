"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ascPriceController_1 = __importDefault(require("../controllers/ascPriceController"));
var AscPriceRoutes = /** @class */ (function () {
    function AscPriceRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    AscPriceRoutes.prototype.config = function () {
        this.router.get('/', ascPriceController_1.default.getAscPriceProducts);
    };
    return AscPriceRoutes;
}());
var ascpriceRoutes = new AscPriceRoutes();
exports.default = ascpriceRoutes.router;
