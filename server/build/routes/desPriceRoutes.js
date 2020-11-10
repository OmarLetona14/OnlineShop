"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var descPriceController_1 = __importDefault(require("../controllers/descPriceController"));
var DescPriceRoutes = /** @class */ (function () {
    function DescPriceRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    DescPriceRoutes.prototype.config = function () {
        this.router.get('/', descPriceController_1.default.getDescPriceProducts);
    };
    return DescPriceRoutes;
}());
var descpriceRoutes = new DescPriceRoutes();
exports.default = descpriceRoutes.router;
