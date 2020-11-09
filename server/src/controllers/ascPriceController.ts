import {Request, Response} from 'express'
import db from '../config/database'

class AscPriceController{

    async getAscPriceProducts(req:Request, res:Response){
        var cn = db.db2()
        await cn.exec(`select p.idPublication, p.product_name, p.product_detail, p.price, pc.category_name, s.idsystemuser, s.names, s.last_name, p.publish_date, p.image_path, p.visible_publication from publication p 
        inner join product_category pc on p.idproduct_category = pc.idproduct_category
        inner join systemUser s on p.idsystemuser = s.idsystemuser 
        order by p.price asc`,[],(result:any, err:any)=>{
            if (err) throw err;
            res.json(result)
        }); 
    }
}

const ascpriceController = new AscPriceController()
export default ascpriceController;