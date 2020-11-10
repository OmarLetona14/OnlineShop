import {Router} from 'express';
import userValidationController from '../controllers/userValidationController'

class UserValidationRoutes{

    public router:Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.post('/', userValidationController.getUserByEmail);
    }

}

const userValidationRoutes = new UserValidationRoutes();
export default userValidationRoutes.router;