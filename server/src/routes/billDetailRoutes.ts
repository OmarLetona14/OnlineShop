import {Router} from 'express';
import billDetailController from '../controllers/billDetailController'

class BillDetailRoutes{

    public router:Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/:id', billDetailController.getBillDetails);
    }

}

const billDetailRoutes = new BillDetailRoutes();
export default billDetailRoutes.router;