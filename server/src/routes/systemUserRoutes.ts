import {Router} from 'express';

class SystemUserRoutes{

    public router:Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', (req, res) =>{
            res.send('Users')
        });

    }

}

const systemUserRoutes = new SystemUserRoutes();
export default systemUserRoutes.router;