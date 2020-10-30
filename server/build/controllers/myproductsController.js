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
class MyProductsController {
    getAllMyProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var cn = database_1.default.db2();
            let params = [req.params.id];
            yield cn.exec(`select p.idPublication, p.product_name, p.product_detail, p.price, pc.category_name, s.idsystemuser, s.names, 
        s.last_name, p.publish_date, p.image_path, p.visible_publication from publication p 
        inner join product_category pc on p.idproduct_category = pc.idproduct_category
        inner join systemUser s on p.idsystemuser = s.idsystemuser where s.idsystemuser  = :A`, params, (result, err) => {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getLastInserted(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var cn = database_1.default.db2();
            let params = [req.body.product_name, req.body.product_detail, req.body.price, req.body.category_name, req.body.idSystemUser,
                req.body.image_path];
            var sql = `select idPublication from publication p
        inner join product_category cp on cp.idproduct_category = p.idproduct_category
        inner join systemuser u on u.idsystemuser = p.idsystemuser
        where p.product_name = :A and p.product_detail = :B and p.price = :C and cp.category_name = :D and u.idSystemUser = :E and 
        p.image_path = :F`;
            yield cn.exec(sql, params, (result, err) => {
                if (err)
                    throw err;
                console.log(result);
                res.json(result);
            });
        });
    }
}
const myproductsController = new MyProductsController();
exports.default = myproductsController;
