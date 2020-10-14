"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class SystemUserRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => {
            res.send('Users');
        });
    }
}
const systemUserRoutes = new SystemUserRoutes();
exports.default = systemUserRoutes.router;
