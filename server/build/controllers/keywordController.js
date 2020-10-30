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
class KeywordController {
    getAllFromPublication(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var cn = database_1.default.db2();
            let id = req.params.id;
            let params = [id];
            yield cn.exec(`select kp.idkeyword_publication, k.idkeyword, kp.idpublication, k.word_text from keyword_publication kp
        inner join keyword k on kp.idkeyword = k.idkeyword
        where idpublication = :A `, params, (result, err) => {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    insert(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var cn = database_1.default.db2();
            let params = [req.body.word, req.body.idpublication];
            let sql = `call insert_keyword(:A, :B)`;
            yield cn.exec(sql, params, (result, err) => {
                if (err)
                    throw err;
                res.json({ "message:": "Creado correctamente" });
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var cn = database_1.default.db2();
            let params = [req.params.id];
            let sql = `call delete_keyword(:A)`;
            yield cn.exec(sql, params, (result, err) => {
                if (err)
                    throw err;
                res.json({ "msg": "The keyword was deleted" });
            });
        });
    }
}
const keywordController = new KeywordController();
exports.default = keywordController;
