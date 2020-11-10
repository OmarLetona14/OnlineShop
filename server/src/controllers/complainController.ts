import {Request, Response} from 'express'
import db from '../config/database'

class ComplainController{

    async getAll(req:Request, res:Response){
        var cn = db.db2()
        await cn.exec(`select c.idcomplain, p.idpublication, p.product_name, p.image_path, s.idsystemuser as id_demandante , s.names as names_demandante ,s.last_name as last_name_demandante, s.email as email_demandante,
        su.idsystemuser as id_dueno,  su.names as names_dueno, su.last_name as last_name_dueno, su.email as email_dueno, c.reason, c.checked,c.complain_date as tm from complain c
                inner join publication p on p.idpublication = c.idpublication
                inner join systemuser s on s.idsystemuser = c.idsystemuser
                inner join systemuser su on p.idsystemuser = su.idsystemuser
                order by tm desc`,[],(result:any, err:any)=>{
            if (err) throw err;
            res.json(result)
        }); 
    }

    async insert(req:Request, res:Response){
        var cn = db.db2()
        let params = [req.body.idpublication, req.body.id_demandante, req.body.reason]
        let sql = `call insert_complain(:A, :B, :C)`
        await cn.exec(sql, params,(result:any, err:any)=>{
            if (err) throw err;
            res.json({"message:": "Creado correctamente"})
        });
    }

    async acceptComplain(req:Request, res:Response){
        var cn = db.db2()
        var params = [req.params.id]
        var sql = `call change_publication_visibilty(:A)`
        await cn.exec(sql, params, (result:any, err:any)=>{
            if (err) throw err;
            res.json({"message:": "Revision completada"})
        });
    }
}

const complainController = new ComplainController()
export default complainController;