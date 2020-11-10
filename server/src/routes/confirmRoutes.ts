import {Router} from 'express';
import confirmController from '../controllers/confirmController'

class ConfirmRoutes{

    public router:Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/:id', confirmController.confirmUser)
    }

}

const confirmRoutes = new ConfirmRoutes();
export default confirmRoutes.router;