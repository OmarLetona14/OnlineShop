import {Router} from 'express';
import mostComplainedController from '../controllers/mostComplainedController'

class MostComplainedRoutes{

    public router:Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', mostComplainedController.getMostComplained)
    }

}

const mostComplainedRoutes = new MostComplainedRoutes();
export default mostComplainedRoutes.router;