import {Request, Response} from 'express'
import db from '../config/database'

class MostComplainedController{

    async getMostComplained(req:Request, res:Response){
        var cn = db.db2()
        var sql = `select concat(concat(s.names,' '), s.last_name) as nombres, s.email, s.birthdate, count(*) as cantidad_denuncias
        from complain c
        inner join systemuser s on s.idsystemuser = c.idsystemuser
        group by s.names, s.last_name, s.email, s.birthdate
        order by cantidad_denuncias desc FETCH FIRST 10 ROWS ONLY`
        await cn.exec(sql, [], (result:any, err:any)=>{
            if (err) throw err;
            res.json(result)
        });
    }
}

const mostComplainedController = new MostComplainedController()
export default mostComplainedController;