import {Router} from 'express';
import mostPublicatedController from '../controllers/mostPublicatedController'

class MostPublicatedRoutes{

    public router:Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', mostPublicatedController.getMostPublicated)
    }

}

const mostPublicatedRoutes = new MostPublicatedRoutes();
export default mostPublicatedRoutes.router;