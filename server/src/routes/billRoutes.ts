import {Router} from 'express';
import billController from '../controllers/billController'

class BillRoutes{

    public router:Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/:id', billController.getBill);
        this.router.post('/', billController.insert);
    }

}

const billRoutes = new BillRoutes();
export default billRoutes.router;