"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var filterCategoryController_1 = __importDefault(require("../controllers/filterCategoryController"));
var FilterCategoryRoutes = /** @class */ (function () {
    function FilterCategoryRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    FilterCategoryRoutes.prototype.config = function () {
        this.router.post('/', filterCategoryController_1.default.getProductsCategory);
    };
    return FilterCategoryRoutes;
}());
var filterCategoryRoutes = new FilterCategoryRoutes();
exports.default = filterCategoryRoutes.router;
