import {Request, Response} from 'express'
import db from '../config/database'

class ConfirmController{

    async confirmUser(req:Request, res:Response){
        var cn = db.db2()
        var sql = `call confirm_account(:A)`
        var params = [req.params.id]
        await cn.exec(sql, params, (result:any, err:any)=>{
            if (err) throw err;
            res.json(result)
        });
    }
}

const confirmController = new ConfirmController()
export default confirmController;