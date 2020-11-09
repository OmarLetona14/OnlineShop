import {Router} from 'express';
import ascPriceController from '../controllers/ascPriceController'

class AscPriceRoutes{

    public router:Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', ascPriceController.getAscPriceProducts);
    }

}

const ascpriceRoutes = new AscPriceRoutes();
export default ascpriceRoutes.router;