"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var complainController_1 = __importDefault(require("../controllers/complainController"));
var ComplainRoutes = /** @class */ (function () {
    function ComplainRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    ComplainRoutes.prototype.config = function () {
        this.router.get('/', complainController_1.default.getAll);
        this.router.post('/', complainController_1.default.insert);
        this.router.get('/:id', complainController_1.default.acceptComplain);
    };
    return ComplainRoutes;
}());
var complainRoutes = new ComplainRoutes();
exports.default = complainRoutes.router;
