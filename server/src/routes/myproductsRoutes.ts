import {Router} from 'express';
import myproductsController from '../controllers/myproductsController'

class MyProductsRoutes{

    public router:Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/:id', myproductsController.getAllMyProducts)
        this.router.post('/', myproductsController.getLastInserted);
    }

}

const myproductsRoutes = new MyProductsRoutes();
export default myproductsRoutes.router;