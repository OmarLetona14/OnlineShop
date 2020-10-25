"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productsController_1 = __importDefault(require("../controllers/productsController"));
class ProductsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', productsController_1.default.getAll);
        this.router.get('/:id', productsController_1.default.getOne);
        this.router.post('/', productsController_1.default.insert);
        this.router.put('/:id', productsController_1.default.edit);
        this.router.delete('/:id', productsController_1.default.delete);
    }
}
const productsRoutes = new ProductsRoutes();
exports.default = productsRoutes.router;
