import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import {NavigationComponent} from './components/navigation/navigation.component'
import { ProductsListComponent } from './components/products-list/products-list.component';
import { HomeWebComponent } from './components/home-web/home-web.component';


import {ProductsService} from './services/products.service';
import { AddProductComponent } from './components/add-product/add-product.component'

@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    UserLoginComponent,
    ProductsListComponent,
    NavigationComponent,
    HomeWebComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
