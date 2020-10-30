"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const myproductsController_1 = __importDefault(require("../controllers/myproductsController"));
class MyProductsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', myproductsController_1.default.getAllMyProducts);
        this.router.post('/', myproductsController_1.default.getLastInserted);
    }
}
const myproductsRoutes = new MyProductsRoutes();
exports.default = myproductsRoutes.router;
