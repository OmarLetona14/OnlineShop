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
    getAllFromPublication(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var cn = database_1.default.db2();
            let id = req.params.id;
            yield cn.exec(`select cm.idComment_publication, cm.publish_date, cm.comment_content, s.names, s.last_name, s.image_path
        from comment_publication cm 
        inner join systemuser s on s.idsystemuser = cm.idsystemuser
        where cm.idpublication = :A`, [id], (result, err) => {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    insert(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var cn = database_1.default.db2();
            let params = [req.body.content, req.body.idsystemuser, req.body.idpublication];
            let sql = `call insert_comment(:A, :B, :C)`;
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
                res.json({ "msg": "The product was updated" });
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var cn = database_1.default.db2();
            let params = [req.params.id];
            let sql = "delete from publication where idpublication = :A";
            yield cn.exec(sql, params, (result, err) => {
                if (err)
                    throw err;
                res.json({ "msg": "The product was deleted" });
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var cn = database_1.default.db2();
            var sql = `select p.idPublication, p.product_name, p.product_detail, p.price, pc.category_name, s.idsystemuser, s.names, s.last_name, p.publish_date, p.image_path, p.visible_publication from publication p 
        inner join product_category pc on p.idproduct_category = pc.idproduct_category
        inner join systemUser s on p.idsystemuser = s.idsystemuser
        where idpublication = :A`;
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
