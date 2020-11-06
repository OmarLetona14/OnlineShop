import {Router} from 'express';
import shoppingCartController from '../controllers/shoppingCartController'

class ShoppingCartRoutes{

    public router:Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        //this.router.get('/', productsController.getAll);
        this.router.get('/:id', shoppingCartController.getShoppigCart);
        this.router.post('/', shoppingCartController.insert);
      //  this.router.put('/:id', productsController.edit);
        this.router.delete('/:id', shoppingCartController.delete)
    }

}

const shoppingcartRoutes = new ShoppingCartRoutes();
export default shoppingcartRoutes.router;