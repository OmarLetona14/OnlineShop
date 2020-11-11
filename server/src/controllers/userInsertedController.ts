import {Request, Response} from 'express'
import db from '../config/database'

class UserInsertedController{

    async getUserByInserted(req:Request, res:Response){
        var cn = db.db2()
        var sql = `select idsystemuser, email from systemuser where names = :A and last_name = :B and email = 
            :C and user_password = :D
            and birthdate = :E and user_type = :F`
        var params = [req.body.names, req.body.last_name, req.body.email, req.body.user_password, req.body.birthdate, req.body.user_type]
        await cn.exec(sql, params, (result:any, err:any)=>{
            if (err) throw err;
            res.json(result)
        });
    }
}

const userInsertedController = new UserInsertedController()
export default userInsertedController;