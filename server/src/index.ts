import express,{Application} from 'express';
import morgan from 'morgan'
import cors from 'cors'

import indexRoutes from './routes/indexRoutes'
import systemUserRoutes from './routes/systemUserRoutes'
import productRoutes from './routes/productRoutes'
import productCategoryRoutes from './routes/productCategoryRoutes'
import loginRoutes from './routes/loginRoutes'
import keywordRoutes from './routes/keywordRoutes'
import myproductsRoutes from './routes/myproductsRoutes'
import likesRoutes from './routes/likeRoutes'
import commentRoutes from './routes/commentRoutes'
import complainRoutes from './routes/complainRoutes'
import complainchangeRoutes from './routes/complainchangeRoutes'
import shoppingCartRoutes from './routes/shoppingCartRoutes'
import descPriceRoutes from './routes/desPriceRoutes'
import ascPriceRoutes from './routes/ascPriceRoutes'
import filterCategoryRoutes from './routes/filterCategoryRoutes'
import billRoutes from './routes/billRoutes'
import billDetailRoutes from './routes/billDetailRoutes'
import logRoutes from './routes/logRoutes'
import emailRoutes from './routes/emailRoutes'
import userValidationRoutes from './routes/userValidationRoutes'
import recoveryRoutes from './routes/recoveryRoutes'
import emailComplainRoutes from './routes/emailComplainRoutes'
import emailConfirmationRoutes from './routes/emailConfirmationRoutes'
import confirmRoutes from './routes/confirmRoutes'
import userInsertedRoutes from './routes/userInsertedRoutes'
import mostSelledRoutes from './routes/mostSelledRoutes'
import mostComplainedRoutes from './routes/mostComplainedRoutes'
import mostPublicatedRoutes from './routes/mostPublicatedRoutes'

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
        this.app.use('/api/keyword', keywordRoutes);
        this.app.use('/api/myproducts', myproductsRoutes);
        this.app.use('/api/likes', likesRoutes);
        this.app.use('/api/comments', commentRoutes);
        this.app.use('/api/complain', complainRoutes);
        this.app.use('/api/complainchange', complainchangeRoutes);
        this.app.use('/api/shoppingcart', shoppingCartRoutes);
        this.app.use('/api/descprice', descPriceRoutes);
        this.app.use('/api/ascprice', ascPriceRoutes);
        this.app.use('/api/filtercategory', filterCategoryRoutes);
        this.app.use('/api/bill', billRoutes);
        this.app.use('/api/billdetails', billDetailRoutes);
        this.app.use('/api/log', logRoutes);
        this.app.use('/api/email', emailRoutes);
        this.app.use('/api/uservalidation', userValidationRoutes);
        this.app.use('/api/recovery', recoveryRoutes);
        this.app.use('/api/notifycomplain', emailComplainRoutes);
        this.app.use('/api/confirmation', emailConfirmationRoutes);
        this.app.use('/api/confirm', confirmRoutes);
        this.app.use('/api/userinserted', userInsertedRoutes);
        this.app.use('/api/mostselled', mostSelledRoutes);
        this.app.use('/api/mostcomplained',mostComplainedRoutes);
        this.app.use('/api/mostpublicated', mostPublicatedRoutes);
    }

    start():void{
        this.app.listen(this.app.get('port'), ()=>{
            console.log('Server is running...')
        });
    }

}

const server = new Server()
server.start()