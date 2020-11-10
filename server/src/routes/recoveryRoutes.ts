import {Router} from 'express';
import recoveryController from '../controllers/recoveryController'

class RecoveryRoutes{

    public router:Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.post('/', recoveryController.changePassword);
    }

}

const recoveryRoutes = new RecoveryRoutes();
export default recoveryRoutes.router;