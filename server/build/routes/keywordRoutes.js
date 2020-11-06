"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var keywordController_1 = __importDefault(require("../controllers/keywordController"));
var KeywordRoutes = /** @class */ (function () {
    function KeywordRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    KeywordRoutes.prototype.config = function () {
        this.router.get('/:id', keywordController_1.default.getAllFromPublication);
        this.router.post('/', keywordController_1.default.insert);
        this.router.delete('/:id', keywordController_1.default.delete);
    };
    return KeywordRoutes;
}());
var keywordRoutes = new KeywordRoutes();
exports.default = keywordRoutes.router;
