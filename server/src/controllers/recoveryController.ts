import {Request, Response} from 'express'
import db from '../config/database'

class RecoveryController{

    async changePassword(req:Request, res:Response){
        var cn = db.db2()
        let params = [req.body.idsystemuser, req.body.password]
        let sql =  `call change_password(:A, :B)`
        await cn.exec(sql, params,(result:any, err:any)=>{
            if (err) throw err;
            res.json({"messagge":"Password changed"});
        });
    }
}

const recoveryController = new RecoveryController()
export default recoveryController;