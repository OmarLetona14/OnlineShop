import {Router} from 'express';
import categoryController from '../controllers/categoryController'

class ProductCategoryRoutes{

    public router:Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', categoryController.getAll);
        this.router.get('/:id', categoryController.getOne)
        this.router.post('/', categoryController.insert);
        this.router.put('/:id', categoryController.edit);
        this.router.delete('/:id', categoryController.delete)
    }

}

const productCategoryRoutes = new ProductCategoryRoutes();
export default productCategoryRoutes.router;