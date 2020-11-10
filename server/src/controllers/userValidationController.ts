import {Request, Response} from 'express'
import db from '../config/database'

class UserValidationController{

    async getUserByEmail(req:Request, res:Response){
        var cn = db.db2()
        let params = [req.body.email]
        let sql =  `select * from systemuser 
        where email = :A`
        await cn.exec(sql, params,(result:any, err:any)=>{
            if (err) throw err;
            res.json(result);
        });
    }
}

const userValidationController = new UserValidationController()
export default userValidationController;