import {Request, Response} from 'express'
import db from '../config/database'

class MyProductsController{

    async getAllMyProducts(req:Request, res:Response){
        var cn = db.db2()
        let params = [req.params.id]
        await cn.exec(`select p.idPublication, p.product_name, p.product_detail, p.price, pc.category_name, s.idsystemuser, s.names, 
        s.last_name, p.publish_date, p.image_path, p.visible_publication from publication p 
        inner join product_category pc on p.idproduct_category = pc.idproduct_category
        inner join systemUser s on p.idsystemuser = s.idsystemuser where s.idsystemuser  = :A`,params,(result:any, err:any)=>{
            if (err) throw err;
            res.json(result)
        }); 
    }

    async getLastInserted(req:Request, res:Response){
        var cn = db.db2()
        let params = [req.body.product_name, req.body.product_detail, req.body.price, req.body.category_name,  req.body.idSystemUser,
            req.body.image_path]
        var sql = `select idPublication from publication p
        inner join product_category cp on cp.idproduct_category = p.idproduct_category
        inner join systemuser u on u.idsystemuser = p.idsystemuser
        where p.product_name = :A and p.product_detail = :B and p.price = :C and cp.category_name = :D and u.idSystemUser = :E and 
        p.image_path = :F`
        await cn.exec(sql, params, (result:any, err:any)=>{
            if (err) throw err;
            console.log(result)
            res.json(result)
        });
    }
}

const myproductsController = new MyProductsController()
export default myproductsController;