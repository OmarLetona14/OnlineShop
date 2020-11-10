import {Router} from 'express';
import emailConfirmation from '../controllers/emailConfirmation'

class EmailConfirmationRoutes{

    public router:Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.post('/', emailConfirmation.sendConfirmUser);
    }

}

const emailConfirmationRoutes = new EmailConfirmationRoutes();
export default emailConfirmationRoutes.router;