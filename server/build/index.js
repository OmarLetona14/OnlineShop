"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
var systemUserRoutes_1 = __importDefault(require("./routes/systemUserRoutes"));
var productRoutes_1 = __importDefault(require("./routes/productRoutes"));
var productCategoryRoutes_1 = __importDefault(require("./routes/productCategoryRoutes"));
var loginRoutes_1 = __importDefault(require("./routes/loginRoutes"));
var keywordRoutes_1 = __importDefault(require("./routes/keywordRoutes"));
var myproductsRoutes_1 = __importDefault(require("./routes/myproductsRoutes"));
var likeRoutes_1 = __importDefault(require("./routes/likeRoutes"));
var commentRoutes_1 = __importDefault(require("./routes/commentRoutes"));
var complainRoutes_1 = __importDefault(require("./routes/complainRoutes"));
var complainchangeRoutes_1 = __importDefault(require("./routes/complainchangeRoutes"));
var shoppingCartRoutes_1 = __importDefault(require("./routes/shoppingCartRoutes"));
var desPriceRoutes_1 = __importDefault(require("./routes/desPriceRoutes"));
var ascPriceRoutes_1 = __importDefault(require("./routes/ascPriceRoutes"));
var filterCategoryRoutes_1 = __importDefault(require("./routes/filterCategoryRoutes"));
var billRoutes_1 = __importDefault(require("./routes/billRoutes"));
var billDetailRoutes_1 = __importDefault(require("./routes/billDetailRoutes"));
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    Server.prototype.config = function () {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    };
    Server.prototype.routes = function () {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/users', systemUserRoutes_1.default);
        this.app.use('/api/products', productRoutes_1.default);
        this.app.use('/api/categories', productCategoryRoutes_1.default);
        this.app.use('/api/login', loginRoutes_1.default);
        this.app.use('/api/keyword', keywordRoutes_1.default);
        this.app.use('/api/myproducts', myproductsRoutes_1.default);
        this.app.use('/api/likes', likeRoutes_1.default);
        this.app.use('/api/comments', commentRoutes_1.default);
        this.app.use('/api/complain', complainRoutes_1.default);
        this.app.use('/api/complainchange', complainchangeRoutes_1.default);
        this.app.use('/api/shoppingcart', shoppingCartRoutes_1.default);
        this.app.use('/api/descprice', desPriceRoutes_1.default);
        this.app.use('/api/ascprice', ascPriceRoutes_1.default);
        this.app.use('/api/filtercategory', filterCategoryRoutes_1.default);
        this.app.use('/api/bill', billRoutes_1.default);
        this.app.use('/api/billdetails', billDetailRoutes_1.default);
    };
    Server.prototype.start = function () {
        this.app.listen(this.app.get('port'), function () {
            console.log('Server is running...');
        });
    };
    return Server;
}());
var server = new Server();
server.start();
