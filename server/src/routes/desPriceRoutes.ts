import {Router} from 'express';
import descPriceController from '../controllers/descPriceController'

class DescPriceRoutes{

    public router:Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', descPriceController.getDescPriceProducts);
    }

}

const descpriceRoutes = new DescPriceRoutes();
export default descpriceRoutes.router;