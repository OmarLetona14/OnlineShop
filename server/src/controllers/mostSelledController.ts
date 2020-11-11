import {Request, Response} from 'express'
import db from '../config/database'

class MostSelledController{

    async getMostSelled(req:Request, res:Response){
        var cn = db.db2()
        var sql = `select  p.product_name, s.email, sum(bd.cantidad) as numero_vendido from bill b
        inner join bill_detail bd on bd.idbill = b.idbill
        inner join publication p on p.idpublication = bd.idpublication
        inner join systemuser s on s.idsystemuser = p.idsystemuser
        group by p.product_name, s.email order by numero_vendido desc FETCH FIRST 10 ROWS ONLY`
        await cn.exec(sql, [], (result:any, err:any)=>{
            if (err) throw err;
            res.json(result)
        });
    }
}

const mostSelledController = new MostSelledController()
export default mostSelledController;