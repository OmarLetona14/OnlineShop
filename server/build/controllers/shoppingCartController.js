"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = __importDefault(require("../config/database"));
var ShoppingCartController = /** @class */ (function () {
    function ShoppingCartController() {
    }
    ShoppingCartController.prototype.getCart = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var cn;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cn = database_1.default.db2();
                        return [4 /*yield*/, cn.exec("select p.idPublication, p.product_name, p.product_detail, p.price, pc.category_name, s.idsystemuser, s.names, s.last_name, p.publish_date, p.image_path, p.visible_publication from publication p \n        inner join product_category pc on p.idproduct_category = pc.idproduct_category\n        inner join systemUser s on p.idsystemuser = s.idsystemuser", [], function (result, err) {
                                if (err)
                                    throw err;
                                res.json(result);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartController.prototype.insert = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var cn, params, sql;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cn = database_1.default.db2();
                        params = [req.body.idsystemuser, req.body.idpublication, req.body.cantidad];
                        sql = "call add_to_cart(:A, :B, :C)";
                        return [4 /*yield*/, cn.exec(sql, params, function (result, err) {
                                if (err)
                                    throw err;
                                res.json({ "message:": "se agrego correctamente" });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartController.prototype.delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var cn, params, sql;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cn = database_1.default.db2();
                        params = [req.params.id];
                        sql = "call clean_cart(:A)";
                        return [4 /*yield*/, cn.exec(sql, params, function (result, err) {
                                if (err)
                                    throw err;
                                res.json({ "msg": "The cart was cleaned" });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartController.prototype.getShoppigCart = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var cn, sql, params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cn = database_1.default.db2();
                        sql = "\n        select p.idpublication, p.product_name, p.product_detail, p.price, pc.category_name, p.idsystemuser,\n        s.names, s.last_name, p.publish_date, p.image_path, p.visible_publication, sc.cantidad, (cantidad*p.price) total from cart c \n        inner join shopping_cart sc on c.idcart = sc.idcart\n        inner join publication p on sc.idpublication = p.idpublication\n        inner join product_category pc on pc.idproduct_category = p.idproduct_category\n        inner join systemuser s on s.idsystemuser = p.idsystemuser\n        where c.idsystemuser = :A";
                        params = [req.params.id];
                        return [4 /*yield*/, cn.exec(sql, params, function (result, err) {
                                if (err)
                                    throw err;
                                res.json(result);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return ShoppingCartController;
}());
var shoppingCartController = new ShoppingCartController();
exports.default = shoppingCartController;
