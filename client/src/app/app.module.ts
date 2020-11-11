import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import {NavigationComponent} from './components/navigation/navigation.component'
import { ProductsListComponent } from './components/products-list/products-list.component';
import { HomeWebComponent } from './components/home-web/home-web.component';

import {ProductsService} from './services/products.service';
import {CategoriesService} from './services/categories.service'

import { AddProductComponent } from './components/add-product/add-product.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { MyproductsListComponent } from './components/myproducts-list/myproducts-list.component';
import { AdminComplainComponent } from './components/admin-complain/admin-complain.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { ShoppingcartComponent } from './services/shoppingcart/shoppingcart.component';
import { MycartComponent } from './components/mycart/mycart.component';
import { MybillComponent } from './components/mybill/mybill.component';
import { LogListComponent } from './components/log-list/log-list.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { SendemailComponent } from './components/sendemail/sendemail.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ReportsComponent } from './components/reports/reports.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    UserLoginComponent,
    ProductsListComponent,
    NavigationComponent,
    HomeWebComponent,
    AddProductComponent,
    AddCategoryComponent,
    UserProfileComponent,
    ProductDetailComponent,
    EditProductComponent,
    MyproductsListComponent,
    AdminComplainComponent,
    CategoryListComponent,
    ShoppingcartComponent,
    MycartComponent,
    MybillComponent,
    LogListComponent,
    ChangePasswordComponent,
    SendemailComponent,
    ConfirmationComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProductsService,
    CategoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
