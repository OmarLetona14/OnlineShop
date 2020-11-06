"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var likeController_1 = __importDefault(require("../controllers/likeController"));
var LikesRoutes = /** @class */ (function () {
    function LikesRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    LikesRoutes.prototype.config = function () {
        this.router.get('/:id', likeController_1.default.getAllLikes);
        this.router.post('/:id', likeController_1.default.getLikeByUser);
        this.router.post('/', likeController_1.default.insert);
    };
    return LikesRoutes;
}());
var likesRoutes = new LikesRoutes();
exports.default = likesRoutes.router;
