import {Request, Response} from 'express'
import db from '../config/database'

class FilterCategoryController{

    async getProductsCategory(req:Request, res:Response){
        var cn = db.db2()
        await cn.exec(`select p.idPublication, p.product_name, p.product_detail, p.price, pc.category_name, s.idsystemuser, s.names, s.last_name, p.publish_date, p.image_path, p.visible_publication from publication p 
                inner join product_category pc on p.idproduct_category = pc.idproduct_category
                inner join systemUser s on p.idsystemuser = s.idsystemuser 
                where pc.category_name = :A`,[req.body.category_name],(result:any, err:any)=>{
            if (err) throw err;
            res.json(result)
        }); 
    }
}

const filterCategoryController = new FilterCategoryController()
export default filterCategoryController;