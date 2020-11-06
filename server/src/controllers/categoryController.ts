import {Request, Response} from 'express'
import db from '../config/database'

class CategoryController{

    async getAll(req:Request, res:Response){
        var cn = db.db2()
        await cn.exec(`select * from product_category`,[],(result:any, err:any)=>{
            if (err) throw err;
            res.json(result)
        }); 
    }
    async insert(req:Request, res:Response){
        var cn = db.db2()
        let params = [req.body.category_name]
        let sql = `call insert_category(:A)`
        await cn.exec(sql, params,(result:any, err:any)=>{
            if (err) throw err;
            res.json({"message:": "Creado correctamente"})
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

const categoryController = new CategoryController();
export default categoryController;