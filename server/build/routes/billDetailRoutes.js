"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var billDetailController_1 = __importDefault(require("../controllers/billDetailController"));
var BillDetailRoutes = /** @class */ (function () {
    function BillDetailRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    BillDetailRoutes.prototype.config = function () {
        this.router.get('/:id', billDetailController_1.default.getBillDetails);
    };
    return BillDetailRoutes;
}());
var billDetailRoutes = new BillDetailRoutes();
exports.default = billDetailRoutes.router;
