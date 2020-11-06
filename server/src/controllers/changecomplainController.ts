import {Request, Response} from 'express'
import db from '../config/database'

class ComplainChangeController{

async acceptComplain(req:Request, res:Response){
    var cn = db.db2()
    var params = [req.body.i]
    var sql = `call change_publication_visibilty(:A)`
    var params = [req.params.idpublication, req.body.idcomplain]
    await cn.exec(sql, params, (result:any, err:any)=>{
        if (err) throw err;
        res.json({"message:": "Revision completada"})
    });
}
}

const complainchangeController = new ComplainChangeController()
export default complainchangeController;