"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var billController_1 = __importDefault(require("../controllers/billController"));
var BillRoutes = /** @class */ (function () {
    function BillRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    BillRoutes.prototype.config = function () {
        this.router.get('/:id', billController_1.default.getBill);
        this.router.post('/', billController_1.default.insert);
    };
    return BillRoutes;
}());
var billRoutes = new BillRoutes();
exports.default = billRoutes.router;
