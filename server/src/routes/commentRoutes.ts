import {Router} from 'express';
import commentController from '../controllers/commentController'

class CommentRoutes{

    public router:Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/:id', commentController.getAllFromPublication);
        this.router.post('/', commentController.insert);
    }

}

const commentRoutes = new CommentRoutes();
export default commentRoutes.router;