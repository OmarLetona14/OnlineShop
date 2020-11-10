import {Router} from 'express';
import likeController from '../controllers/likeController'

class LikesRoutes{

    public router:Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/:id', likeController.getAllLikes);
        this.router.post('/:id', likeController.getLikeByUser);
        this.router.post('/', likeController.insert);
    }

}

const likesRoutes = new LikesRoutes();
export default likesRoutes.router;