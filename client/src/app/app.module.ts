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
import { EditProductComponent } from './components/edit-product/edit-product.component'

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
    EditProductComponent
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
