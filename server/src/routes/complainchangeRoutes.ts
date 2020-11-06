import {Router} from 'express';
import complainController from '../controllers/complainController'

class ComplainChangeRoutes{

    public router:Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.post('/', complainController.acceptComplain);
    }

}

const complainchangeRoutes = new ComplainChangeRoutes();
export default complainchangeRoutes.router;