"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoryController_1 = __importDefault(require("../controllers/categoryController"));
class ProductCategoryRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', categoryController_1.default.getAll);
        this.router.get('/:id', categoryController_1.default.getOne);
        this.router.post('/', categoryController_1.default.insert);
        this.router.put('/:id', categoryController_1.default.edit);
        this.router.delete('/:id', categoryController_1.default.delete);
    }
}
const productCategoryRoutes = new ProductCategoryRoutes();
exports.default = productCategoryRoutes.router;
