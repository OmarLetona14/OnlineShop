import {Router} from 'express';
import keywordController from '../controllers/keywordController'

class KeywordRoutes{

    public router:Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/:id', keywordController.getAllFromPublication);
        this.router.post('/', keywordController.insert);
        this.router.delete('/:id', keywordController.delete)
    }

}

const keywordRoutes = new KeywordRoutes();
export default keywordRoutes.router;