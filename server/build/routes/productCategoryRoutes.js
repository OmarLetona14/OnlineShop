"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var categoryController_1 = __importDefault(require("../controllers/categoryController"));
var ProductCategoryRoutes = /** @class */ (function () {
    function ProductCategoryRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    ProductCategoryRoutes.prototype.config = function () {
        this.router.get('/', categoryController_1.default.getAll);
        this.router.get('/:id', categoryController_1.default.getOne);
        this.router.post('/', categoryController_1.default.insert);
    };
    return ProductCategoryRoutes;
}());
var productCategoryRoutes = new ProductCategoryRoutes();
exports.default = productCategoryRoutes.router;
