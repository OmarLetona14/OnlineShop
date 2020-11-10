"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var commentController_1 = __importDefault(require("../controllers/commentController"));
var CommentRoutes = /** @class */ (function () {
    function CommentRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    CommentRoutes.prototype.config = function () {
        this.router.get('/:id', commentController_1.default.getAllFromPublication);
        this.router.post('/', commentController_1.default.insert);
    };
    return CommentRoutes;
}());
var commentRoutes = new CommentRoutes();
exports.default = commentRoutes.router;
