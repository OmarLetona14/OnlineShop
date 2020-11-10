import {Request, Response} from 'express'
import db from '../config/database'

class KeywordController{

    async getAllFromPublication(req:Request, res:Response){
        var cn = db.db2()
        let id = req.params.id;
        let params = [id]
        await cn.exec(`select kp.idkeyword_publication, k.idkeyword, kp.idpublication, k.word_text from keyword_publication kp
        inner join keyword k on kp.idkeyword = k.idkeyword
        where idpublication = :A `,params,(result:any, err:any)=>{
            if (err) throw err;
            res.json(result)
        }); 
    }

    async insert(req:Request, res:Response){
        var cn = db.db2()
        let params = [req.body.word, req.body.idpublication]
        let sql = `call insert_keyword(:A, :B)`
        await cn.exec(sql, params,(result:any, err:any)=>{
            if (err) throw err;
            res.json({"message:": "Creado correctamente"})
        });
    }

    async delete(req:Request, res:Response){
        var cn = db.db2()
        let params = [req.params.id]
        let sql = `call delete_keyword(:A)`
        await cn.exec(sql, params, (result:any, err:any)=>{
            if (err) throw err;
            res.json({"msg":"The keyword was deleted"})
        });
    }
}

const keywordController = new KeywordController()
export default keywordController;