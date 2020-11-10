import {Request, Response} from 'express'
import db from '../config/database'

class LoginController{

    async getLogin(req:Request, res:Response){
        var cn = db.db2()
        var sql = `select s.idsystemuser, s.names, s.last_name, s.email, s.user_password, 
            s.birthdate, s.credits, s.user_type, s.confirmed, s.idcountry, s.image_path, c.country_name
            from systemUser s
            inner join country c on c.idcountry = s.idcountry 
            where email = :A and user_password = :B`
        var params = [req.body.email, req.body.user_password]
        await cn.exec(sql, params, (result:any, err:any)=>{
            if (err) throw err;
            res.json(result)
        });
    }
}

const loginController = new LoginController()
export default loginController;