import {Request, Response} from 'express'
import db from '../config/database'

class LogController{

    async getAll(req:Request, res:Response){
        var cn = db.db2()
        await cn.exec(`select s.email, l.action, l.date_time from log_action l
        inner join systemuser s on s.idsystemuser = l.idsystemuser`,[],(result:any, err:any)=>{
            if (err) throw err;
            res.json(result)
        }); 
    }

    async insert(req:Request, res:Response){
        var cn = db.db2()
        let params = [req.body.action, req.body.idsystemuser]
        let sql = `call insert_log(:A, :B)`
        await cn.exec(sql, params,(result:any, err:any)=>{
            if (err) throw err;
            res.json({"message:": "Creado correctamente"})
        });
    }
}

const logController = new LogController()
export default logController;