import {Request, Response} from 'express'
import db from '../config/database'

class BillController{

    async insert(req:Request, res:Response){
        var cn = db.db2()
        let params = [req.body.idsystemuser]
        let sql = `call insert_bill(:A)`
        await cn.exec(sql, params,(result:any, err:any)=>{
            if (err) throw err;
            res.json({"message:": "se agrego correctamente la factura"})
        });
    }

    async getBill(req:Request, res:Response){
        var cn = db.db2()
        var sql = `select s.names, s.last_name, s.email, b.date_time, b.total from bill b
        inner join systemuser s on s.idsystemuser = b.idsystemuser
        where b.idsystemuser = :A`
        var params = [req.params.id]
        await cn.exec(sql, params, (result:any, err:any)=>{
            if (err) throw err;
            res.json(result)
        });
    }
}

const billController = new BillController()
export default billController;