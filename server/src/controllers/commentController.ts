import {Request, Response} from 'express'
import db from '../config/database'

class ProductsController{

    async getAllFromPublication(req:Request, res:Response){
        var cn = db.db2()
        let id = req.params.id
        await cn.exec(`select cm.idComment_publication, cm.publish_date, cm.comment_content, s.names, s.last_name, s.image_path
        from comment_publication cm 
        inner join systemuser s on s.idsystemuser = cm.idsystemuser
        where cm.idpublication = :A`,[id],(result:any, err:any)=>{
            if (err) throw err;
            res.json(result)
        }); 
    }

    async insert(req:Request, res:Response){
        var cn = db.db2()
        let params = [req.body.content, req.body.idsystemuser, req.body.idpublication]
        let sql = `call insert_comment(:A, :B, :C)`
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