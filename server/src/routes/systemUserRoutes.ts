import {Router} from 'express';
import systemUserController from '../controllers/systemUserController'

class SystemUserRoutes{

    public router:Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', systemUserController.getAll);
        this.router.get('/:id', systemUserController.getOne)
        this.router.post('/', systemUserController.insert);
        this.router.put('/:id', systemUserController.edit);
        this.router.delete('/:id', systemUserController.delete)
    }

}

const systemUserRoutes = new SystemUserRoutes();
export default systemUserRoutes.router;