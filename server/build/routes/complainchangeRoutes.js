"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var complainController_1 = __importDefault(require("../controllers/complainController"));
var ComplainChangeRoutes = /** @class */ (function () {
    function ComplainChangeRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    ComplainChangeRoutes.prototype.config = function () {
        this.router.post('/', complainController_1.default.acceptComplain);
    };
    return ComplainChangeRoutes;
}());
var complainchangeRoutes = new ComplainChangeRoutes();
exports.default = complainchangeRoutes.router;
