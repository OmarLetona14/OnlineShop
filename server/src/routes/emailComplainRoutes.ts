import {Router} from 'express';
import emailComplainController from '../controllers/emailComplainController'

class EmailComplainController{

    public router:Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.post('/', emailComplainController.sendComplain);
    }

}

const emailComplainRoutes = new EmailComplainController();
export default emailComplainRoutes.router;