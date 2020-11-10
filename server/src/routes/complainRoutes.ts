import {Router} from 'express';
import complainController from '../controllers/complainController'

class ComplainRoutes{

    public router:Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', complainController.getAll);
        this.router.post('/', complainController.insert);
        this.router.get('/:id', complainController.acceptComplain)
    }

}

const complainRoutes = new ComplainRoutes();
export default complainRoutes.router;