import {Router} from 'express';
import mostSelledController from '../controllers/mostSelledController'

class MostSelledRoutes{

    public router:Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', mostSelledController.getMostSelled)
    }

}

const mostSelledRoutes = new MostSelledRoutes();
export default mostSelledRoutes.router;