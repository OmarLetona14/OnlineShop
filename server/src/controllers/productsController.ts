import {Request, Response} from 'express'
import db from '../config/database'

class ProductsController{

    async getAll(req:Request, res:Response){
        var cn = db.db2()
        await cn.exec(`select p.idPublication, p.product_name, p.product_detail, p.price, pc.category_name, s.idsystemuser, s.names, s.last_name, p.publish_date, p.image_path, p.visible_publication from publication p 
        inner join product_category pc on p.idproduct_category = pc.idproduct_category
        inner join systemUser s on p.idsystemuser = s.idsystemuser`,[],(result:any, err:any)=>{
            if (err) throw err;
            res.json(result)
        }); 
    }

    async insert(req:Request, res:Response){
        var cn = db.db2()
        let params = [req.body.product_name, req.body.product_detail, req.body.price, req.body.category_name,  req.body.idSystemUser,
            req.body.image_path]
        let sql = `call insert_publication(:A, :B, :C, :D, :F, :G)`
        await cn.exec(sql, params,(result:any, err:any)=>{
            if (err) throw err;
            res.json({"message:": "Creado correctamente"})
        });
    }

    async edit(req:Request, res:Response){
        var cn = db.db2()
        let sql = "call  edit_user (:A,:B,:C,:D,:E,:F,:G)"
        let params = [req.body.names, req.body.last_name, req.body.user_password, req.body.birthdate,
            req.body.country_name, req.body.image_path, req.params.id]
        await cn.exec(sql, params, (result:any, err:any)=>{
            if (err) throw err;
            res.json({"msg":"The product was updated"})
        });
    }

    async delete(req:Request, res:Response){
        var cn = db.db2()
        let params = [req.params.id]
        let sql = "delete from publication where idpublication = :A" 
        await cn.exec(sql, params, (result:any, err:any)=>{
            if (err) throw err;
            res.json({"msg":"The product was deleted"})
        });
    }

    async getOne(req:Request, res:Response){
        var cn = db.db2()
        var sql = `select p.idPublication, p.product_name, p.product_detail, p.price, pc.category_name, s.idsystemuser, s.names, s.last_name, p.publish_date, p.image_path, p.visible_publication from publication p 
        inner join product_category pc on p.idproduct_category = pc.idproduct_category
        inner join systemUser s on p.idsystemuser = s.idsystemuser
        where idpublication = :A`
        var params = [req.params.id]
        await cn.exec(sql, params, (result:any, err:any)=>{
            if (err) throw err;
            res.json(result)
        });
    }
}

const productsController = new ProductsController()
export default productsController;