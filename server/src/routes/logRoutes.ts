import {Router} from 'express';
import logController from '../controllers/logController'

class LogRoutes{

    public router:Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', logController.getAll);
        this.router.post('/', logController.insert);
    }

}

const logRoutes = new LogRoutes();
export default logRoutes.router;