"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var myproductsController_1 = __importDefault(require("../controllers/myproductsController"));
var MyProductsRoutes = /** @class */ (function () {
    function MyProductsRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    MyProductsRoutes.prototype.config = function () {
        this.router.get('/:id', myproductsController_1.default.getAllMyProducts);
        this.router.post('/', myproductsController_1.default.getLastInserted);
    };
    return MyProductsRoutes;
}());
var myproductsRoutes = new MyProductsRoutes();
exports.default = myproductsRoutes.router;
