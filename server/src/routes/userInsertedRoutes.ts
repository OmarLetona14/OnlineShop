import {Router} from 'express';
import userInsertedController from '../controllers/userInsertedController'

class UserInsertedRoutes{

    public router:Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.post('/', userInsertedController.getUserByInserted);
    }

}

const userInsertedRoutes = new UserInsertedRoutes();
export default userInsertedRoutes.router;