import {Request, Response} from 'express'
import db from '../config/database'

class SystemUserController{

    async getAll(req:Request, res:Response){
        var cn = db.db2()
        await cn.exec("SELECT * FROM SYSTEMUSER",[],(result:any, err:any)=>{
            if (err) throw err;
            res.json(result)
        }); 
    }

    async insert(req:Request, res:Response){
        var cn = db.db2()
        let params = [req.body.names, req.body.last_name, req.body.email, req.body.user_password, req.body.birthdate,
            req.body.user_type, req.body.country_name, req.body.image_path]

        let sql = 'call insert_user (:A, :B, :C, :D, :E, :F, :G, :H)'
        console.log(params);
        await cn.exec(sql, params,(result:any, err:any)=>{
            if (err) throw err;
            res.json(result);
        });
    }

    async edit(req:Request, res:Response){
        var cn = db.db2()
        let sql = "call  edit_user (:A,:B,:C,:D,:E,:F,:G)"
        let params = [req.body.names, req.body.last_name, req.body.user_password, req.body.birthdate,
            req.body.country_name, req.body.image_path, req.params.id]
        await cn.exec(sql, params, (result:any, err:any)=>{
            if (err) throw err;
            res.json(result);
        });
    }

    async delete(req:Request, res:Response){
        var cn = db.db2()
        let params = [req.params.id]
        let sql = "delete from systemUser where idSystemUser = :A" 
        await cn.exec(sql, params, (result:any, err:any)=>{
            if (err) throw err;
            res.json(result)
        });
    }

    async getOne(req:Request, res:Response){
        var cn = db.db2()
        var sql = "select * from systemUser where idSystemUser = :A"
        var params = [req.params.id]
        await cn.exec(sql, params, (result:any, err:any)=>{
            if (err) throw err;
            res.json(result)
        });
    }
}

const systemUserController = new SystemUserController()
export default systemUserController;