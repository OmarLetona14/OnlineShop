import {Request, Response} from 'express'
import db from '../config/database'

class MostPublicatedController{

    async getMostPublicated(req:Request, res:Response){
        var cn = db.db2()
        var sql = `select concat(concat(s.names,' '), s.last_name) as nombres, s.email, s.credits, count(*) as cantidad_productos
        from publication p 
        inner join systemuser s on s.idsystemuser = p.idsystemuser
        group by s.names, s.last_name, s.email, s.credits 
        order by cantidad_productos desc FETCH FIRST 10 ROWS ONLY`
        await cn.exec(sql, [], (result:any, err:any)=>{
            if (err) throw err;
            res.json(result)
        });
    }
}

const mostPublicatedController = new MostPublicatedController()
export default mostPublicatedController;