import {Router} from 'express';
import filterCategoryController from '../controllers/filterCategoryController'

class FilterCategoryRoutes{

    public router:Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.post('/', filterCategoryController.getProductsCategory);
    }
}

const filterCategoryRoutes = new FilterCategoryRoutes();
export default filterCategoryRoutes.router;