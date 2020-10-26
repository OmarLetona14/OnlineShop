import express,{Application} from 'express';
import morgan from 'morgan'
import cors from 'cors'

import indexRoutes from './routes/indexRoutes'
import systemUserRoutes from './routes/systemUserRoutes'
import productRoutes from './routes/productRoutes'
import productCategoryRoutes from './routes/productCategoryRoutes'
import loginRoutes from './routes/loginRoutes'

class Server{

    public app:Application;
    constructor(){
        this.app = express()
        this.config()
        this.routes()
    }

    config():void{
         this.app.set('port', process.env.PORT || 3000)
         this.app.use(morgan('dev'))
         this.app.use(cors())
         this.app.use(express.json())
         this.app.use(express.urlencoded({extended: true}))
    }

    routes():void{
        this.app.use(indexRoutes);
        this.app.use('/api/users',systemUserRoutes);
        this.app.use('/api/products', productRoutes);
        this.app.use('/api/categories', productCategoryRoutes);
        this.app.use('/api/login', loginRoutes);
    }

    start():void{
        this.app.listen(this.app.get('port'), ()=>{
            console.log('Server is running...')
        });
    }

}

const server = new Server()
server.start()