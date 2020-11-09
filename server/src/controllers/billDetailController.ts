import {Request, Response} from 'express'
import db from '../config/database'

class BillDetailController{

    async getBillDetails(req:Request, res:Response){
        var cn = db.db2()
        var sql = `select p.image_path, p.product_name, p.price, bd.cantidad, bd.subtotal from bill_detail bd
        inner join bill b on b.idbill = bd.idbill
        inner join publication p on p.idpublication = bd.idpublication
        where b.idsystemuser = :A`
        var params = [req.params.id]
        await cn.exec(sql, params, (result:any, err:any)=>{
            if (err) throw err;
            res.json(result)
        });
    }
}

const billDetailController = new BillDetailController()
export default billDetailController;