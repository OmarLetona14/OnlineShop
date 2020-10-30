"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const commentController_1 = __importDefault(require("../controllers/commentController"));
class CommentRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', commentController_1.default.getAllFromPublication);
        this.router.post('/', commentController_1.default.insert);
    }
}
const commentRoutes = new CommentRoutes();
exports.default = commentRoutes.router;
