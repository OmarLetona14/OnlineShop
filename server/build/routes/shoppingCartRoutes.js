"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var shoppingCartController_1 = __importDefault(require("../controllers/shoppingCartController"));
var ShoppingCartRoutes = /** @class */ (function () {
    function ShoppingCartRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    ShoppingCartRoutes.prototype.config = function () {
        //this.router.get('/', productsController.getAll);
        this.router.get('/:id', shoppingCartController_1.default.getShoppigCart);
        this.router.post('/', shoppingCartController_1.default.insert);
        //  this.router.put('/:id', productsController.edit);
        this.router.delete('/:id', shoppingCartController_1.default.delete);
    };
    return ShoppingCartRoutes;
}());
var shoppingcartRoutes = new ShoppingCartRoutes();
exports.default = shoppingcartRoutes.router;
