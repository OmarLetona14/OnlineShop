"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const likeController_1 = __importDefault(require("../controllers/likeController"));
class LikesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', likeController_1.default.getAllLikes);
        this.router.post('/:id', likeController_1.default.getLikeByUser);
        this.router.post('/', likeController_1.default.insert);
    }
}
const likesRoutes = new LikesRoutes();
exports.default = likesRoutes.router;
