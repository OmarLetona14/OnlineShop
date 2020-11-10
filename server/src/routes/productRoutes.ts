import {Router} from 'express';
import productsController from '../controllers/productsController'

class ProductsRoutes{

    public router:Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', productsController.getAll);
        this.router.get('/:id', productsController.getOne);
        this.router.post('/', productsController.insert);
        this.router.put('/:id', productsController.edit);
        this.router.delete('/:id', productsController.delete)
    }

}

const productsRoutes = new ProductsRoutes();
export default productsRoutes.router;