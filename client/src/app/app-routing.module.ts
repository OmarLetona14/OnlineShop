import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserLoginComponent} from './components/user-login/user-login.component';
import {HomeWebComponent} from './components/home-web/home-web.component';
import {ProductsListComponent} from './components/products-list/products-list.component';
import {AddProductComponent} from './components/add-product/add-product.component'
import {UserRegisterComponent} from './components/user-register/user-register.component'
import {AddCategoryComponent} from './components/add-category/add-category.component'
import {UserProfileComponent} from './components/user-profile/user-profile.component'
import {EditProductComponent} from './components/edit-product/edit-product.component'
import {nodemailer} from 'nodemailer'
import {MyproductsListComponent} from './components/myproducts-list/myproducts-list.component'
import {ProductDetailComponent} from './components/product-detail/product-detail.component'
import {AdminComplainComponent} from './components/admin-complain/admin-complain.component'
import {CategoryListComponent} from './components/category-list/category-list.component'
import {MycartComponent} from './components/mycart/mycart.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path:'login',
    component:UserLoginComponent
  },
  {
    path:'home',
    component:ProductsListComponent
  },
  {
    path: 'products/add',
    component:AddProductComponent
  },
  {
    path: 'myproducts/edit/:id',
    component:AddProductComponent
  },
  {
    path: 'register',
    component:UserRegisterComponent
  },
  {
    path: 'categories/add',
    component:AddCategoryComponent
  },
  {
    path: 'profile',
    component:UserProfileComponent
  },
  {
    path: 'myproducts',
    component: MyproductsListComponent
  }, 
  {
    path: 'details/:id',
    component: ProductDetailComponent
  },
  {
    path: 'complains',
    component: AdminComplainComponent
  },
  {
    path:'categories',
    component:CategoryListComponent
  },
  {
    path:'mycart',
    component:MycartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
