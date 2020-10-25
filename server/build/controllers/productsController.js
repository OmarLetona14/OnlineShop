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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
class ProductsController {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var cn = database_1.default.db2();
            yield cn.exec(`
        select p.idPublication, p.product_name, p.product_detail, p.price, pc.category_name, s.names, s.last_name, p.publish_date, p.image_path, p.visible_publication from publication p 
        inner join product_category pc on p.idproduct_category = pc.idproduct_category
        inner join systemUser s on p.idsystemuser = s.idsystemuser`, [], (result, err) => {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    insert(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var cn = database_1.default.db2();
            let params = [req.body.product_name, req.body.product_detail, req.body.price, req.body.category_name, req.body.idSystemUser,
                req.body.image_path];
            let sql = `call insert_publication(:A, :B, :C, :D, :F, :G)`;
            yield cn.exec(sql, params, (result, err) => {
                if (err)
                    throw err;
                res.json({ "message:": "Creado correctamente" });
            });
        });
    }
    edit(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var cn = database_1.default.db2();
            let sql = "call  edit_user (:A,:B,:C,:D,:E,:F,:G)";
            let params = [req.body.names, req.body.last_name, req.body.user_password, req.body.birthdate,
                req.body.country_name, req.body.image_path, req.params.id];
            yield cn.exec(sql, params, (result, err) => {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var cn = database_1.default.db2();
            let params = [req.params.id];
            let sql = "delete from systemUser where idSystemUser = :A";
            yield cn.exec(sql, params, (result, err) => {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var cn = database_1.default.db2();
            var sql = "select * from systemUser where idSystemUser = :A";
            var params = [req.params.id];
            yield cn.exec(sql, params, (result, err) => {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
}
const productsController = new ProductsController();
exports.default = productsController;
