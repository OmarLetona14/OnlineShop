import {Request, Response} from 'express'
import db from '../config/database'

class ShoppingCartController{

    async getCart(req:Request, res:Response){
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
        let params = [req.body.idsystemuser, req.body.idpublication, req.body.cantidad]
        let sql = `call add_to_cart(:A, :B, :C)`
        await cn.exec(sql, params,(result:any, err:any)=>{
            if (err) throw err;
            res.json({"message:": "se agrego correctamente"})
        });
    }
    
    async delete(req:Request, res:Response){
        var cn = db.db2()
        let params = [req.params.id]
        let sql = "call clean_cart(:A)" 
        await cn.exec(sql, params, (result:any, err:any)=>{
            if (err) throw err;
            res.json({"msg":"The cart was cleaned"})
        });
    }

    async getShoppigCart(req:Request, res:Response){
        var cn = db.db2()
        var sql = `
        select p.idpublication, p.product_name, p.product_detail, p.price, pc.category_name, p.idsystemuser,
        s.names, s.last_name, p.publish_date, p.image_path, p.visible_publication, sc.cantidad, (cantidad*p.price) total from cart c 
        inner join shopping_cart sc on c.idcart = sc.idcart
        inner join publication p on sc.idpublication = p.idpublication
        inner join product_category pc on pc.idproduct_category = p.idproduct_category
        inner join systemuser s on s.idsystemuser = p.idsystemuser
        where c.idsystemuser = :A`
        var params = [req.params.id]
        await cn.exec(sql, params, (result:any, err:any)=>{
            if (err) throw err;
            res.json(result)
        });
    }
}

const shoppingCartController = new ShoppingCartController()
export default shoppingCartController;