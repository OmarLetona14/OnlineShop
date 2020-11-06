"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var productsController_1 = __importDefault(require("../controllers/productsController"));
var ProductsRoutes = /** @class */ (function () {
    function ProductsRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    ProductsRoutes.prototype.config = function () {
        this.router.get('/', productsController_1.default.getAll);
        this.router.get('/:id', productsController_1.default.getOne);
        this.router.post('/', productsController_1.default.insert);
        this.router.put('/:id', productsController_1.default.edit);
        this.router.delete('/:id', productsController_1.default.delete);
    };
    return ProductsRoutes;
}());
var productsRoutes = new ProductsRoutes();
exports.default = productsRoutes.router;
