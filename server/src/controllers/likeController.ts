import {Request, Response} from 'express'
import db from '../config/database'

class CommentController{

    async getAllLikes(req:Request, res:Response){
        var cn = db.db2()
        let id = req.params.id
        await cn.exec(`-- Numero de likes en una publicacion
        select count(*) likes from like_publication where like_state = 'Y' and idpublication = :A`,[id],(result:any, err:any)=>{
            if (err) throw err;
            res.json(result)
        }); 
    }

    async getLikeByUser(req:Request, res:Response){
        var cn = db.db2()
        let params = [req.params.id, req.body.idpublication]
        console.log(params)
        await cn.exec(`-- Verificar si el usuario actual le dio like
        select like_state from like_publication where idsystemuser = :A and idpublication = :B`,params,(result:any, err:any)=>{
            if (err) throw err;
            res.json(result)
        }); 
    }

    async insert(req:Request, res:Response){
        var cn = db.db2()
        let params = [req.body.idsystemuser, req.body.idpublication, req.body.state]
        let sql = `call change_state(:A, :B, :C)`
        await cn.exec(sql, params,(result:any, err:any)=>{
            if (err) throw err;
            res.json({"message:": "Creado correctamente"})
        });
    }
}

const commentController = new CommentController()
export default commentController;