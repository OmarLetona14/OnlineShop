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
class CommentController {
    getAllLikes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var cn = database_1.default.db2();
            let id = req.params.id;
            yield cn.exec(`-- Numero de likes en una publicacion
        select count(*) likes from like_publication where like_state = 'Y' and idpublication = :A`, [id], (result, err) => {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getLikeByUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var cn = database_1.default.db2();
            let params = [req.params.id, req.body.idpublication];
            console.log(params);
            yield cn.exec(`-- Verificar si el usuario actual le dio like
        select like_state from like_publication where idsystemuser = :A and idpublication = :B`, params, (result, err) => {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    insert(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var cn = database_1.default.db2();
            let params = [req.body.idsystemuser, req.body.idpublication, req.body.state];
            let sql = `call change_state(:A, :B, :C)`;
            yield cn.exec(sql, params, (result, err) => {
                if (err)
                    throw err;
                res.json({ "message:": "Creado correctamente" });
            });
        });
    }
}
const commentController = new CommentController();
exports.default = commentController;
