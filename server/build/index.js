"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const systemUserRoutes_1 = __importDefault(require("./routes/systemUserRoutes"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const productCategoryRoutes_1 = __importDefault(require("./routes/productCategoryRoutes"));
const loginRoutes_1 = __importDefault(require("./routes/loginRoutes"));
const keywordRoutes_1 = __importDefault(require("./routes/keywordRoutes"));
const myproductsRoutes_1 = __importDefault(require("./routes/myproductsRoutes"));
const likeRoutes_1 = __importDefault(require("./routes/likeRoutes"));
const commentRoutes_1 = __importDefault(require("./routes/commentRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/users', systemUserRoutes_1.default);
        this.app.use('/api/products', productRoutes_1.default);
        this.app.use('/api/categories', productCategoryRoutes_1.default);
        this.app.use('/api/login', loginRoutes_1.default);
        this.app.use('/api/keyword', keywordRoutes_1.default);
        this.app.use('/api/myproducts', myproductsRoutes_1.default);
        this.app.use('/api/likes', likeRoutes_1.default);
        this.app.use('/api/comments', commentRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server is running...');
        });
    }
}
const server = new Server();
server.start();
