import {Request, Response} from 'express'
import db from '../config/database'

class CommentController{

    async getAllFromPublication(req:Request, res:Response){
        var cn = db.db2()
        let id = req.params.id
        await cn.exec(`select cm.idComment_publication, cm.publish_date, cm.comment_content, s.names, s.last_name, s.image_path
        from comment_publication cm 
        inner join systemuser s on s.idsystemuser = cm.idsystemuser
        where cm.idpublication = :A`,[id],(result:any, err:any)=>{
            if (err) throw err;
            res.json(result)
        }); 
    }

    async insert(req:Request, res:Response){
        var cn = db.db2()
        let params = [req.body.content, req.body.idsystemuser, req.body.idpublication]
        let sql = `call insert_comment(:A, :B, :C)`
        await cn.exec(sql, params,(result:any, err:any)=>{
            if (err) throw err;
            res.json({"message:": "Creado correctamente"})
        });
    }
}

const commentController = new CommentController()
export default commentController;