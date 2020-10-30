"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const keywordController_1 = __importDefault(require("../controllers/keywordController"));
class KeywordRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', keywordController_1.default.getAllFromPublication);
        this.router.post('/', keywordController_1.default.insert);
        this.router.delete('/:id', keywordController_1.default.delete);
    }
}
const keywordRoutes = new KeywordRoutes();
exports.default = keywordRoutes.router;
