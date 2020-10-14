import {Router} from 'express';
import systemUserController from '../controllers/systemUserController'

class SystemUserRoutes{

    public router:Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', systemUserController.getUser)

    }

}

const systemUserRoutes = new SystemUserRoutes();
export default systemUserRoutes.router;