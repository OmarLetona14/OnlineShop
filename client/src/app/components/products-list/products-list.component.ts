import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { ShoppingCart } from 'src/app/models/shoppingcart';
import { AscendentpriceService } from 'src/app/services/ascendentprice.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { DescendentpriceService } from 'src/app/services/descendentprice.service';
import { FiltercategoryService } from 'src/app/services/filtercategory.service';
import { ShoppingcartService } from 'src/app/services/shoppingcart.service';
import {User} from '../../models/user'
import {ProductsService} from '../../services/products.service'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @HostBinding('class') classes = 'row'
  products:any = [];
  cantidad:string;
  idpub:string;
  static menor_conf:boolean = false;  
  static mayor_conf:boolean = false;
  filter:string;

  constructor(private productService:ProductsService, private categoryService:CategoriesService,
    private cartService:ShoppingcartService, private desService:DescendentpriceService, private ascService:AscendentpriceService,
    private router:Router, private filtercategoryService:FiltercategoryService) { }

  cart:ShoppingCart = {
    idsystemuser: "",
    idpublication: "",
    cantidad:""
  };
  user:User;
  categories:any = [];
  categoryName:string;
  empty:boolean = false;
  category_filter:Category = {
    idProduct_category:0,
    category_name:""
  }

  getCategories():void{
    this.categoryService.getCategories().subscribe(
      res =>{
        this.categories = res;
      },
      err =>{
        console.error(err);
      }
    );
  }

  
  searchByCategory(){
    delete this.category_filter.idProduct_category;
    this.category_filter.category_name = this.categoryName;
    this.filtercategoryService.getFilterProducts(this.category_filter).subscribe(
      res => {
        this.products = [];
        this.products = res;
      },
      err => {
        console.error(err);
      }
    );
    this.router.navigate(['/home'])
  }

  order(){
    if(this.filter == "Mayor precio a menor"){
      this.desService.getDescProducts().subscribe(
        res =>{
          this.products = [];
          this.products = res;
        },
        err =>{
          console.error(err);
        }
      );
      this.router.navigate(['/home'])
    }else if(this.filter == "Menor precio a mayor"){
      this.ascService.getAscProducts().subscribe(
        res => {
          this.products = [];
          this.products = res;
        },
        err =>{
          console.error(err);
        }
      );
      this.router.navigate(['/home'])
    }
  }

  deleteOrder(){
    ProductsListComponent.mayor_conf = false;
    ProductsListComponent.menor_conf = false;
    window.location.replace('/home')
  }

  newItem(id:string):void{
    console.log(id);
    this.idpub = id;
  }

  getProducts():void{
    if(!ProductsListComponent.mayor_conf && !ProductsListComponent.menor_conf){
      this.productService.getProducts().subscribe(
        res => {
          this.products = res;
        },
        err => console.error(err)
      );
    }else if(ProductsListComponent.mayor_conf){
      this.desService.getDescProducts().subscribe(
        res =>{
          this.products = res;
        },
        err =>{
          console.error(err);
        }
      );
    }else if(ProductsListComponent.menor_conf){
      this.ascService.getAscProducts().subscribe(
        res => {
          this.products = res;
        },
        err =>{
          console.error(err);
        }
      );
    }
  }


  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
    this.user = JSON.parse(localStorage.getItem("currentUser"));
    if (this.products.length >1){
      this.empty = true;
    }
  }

  menor(){
    this.ascService.getAscProducts().subscribe(
      res => {
        this.products = res;
      },
      err => {
        console.error(err);
      }
    );
  }

  mayor(){


  }

  public addToShopingCart(){
    this.cart.idsystemuser = this.user.idSystemUser;
    this.cart.idpublication = this.idpub;
    this.cart.cantidad = this.cantidad;
    this.cartService.saveMyProduct(this.cart).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/mycart']);
      },
      err =>{
        console.error(err);
      }
    );
  }

  delete(id:string){
    this.productService.deleteProduct(id).subscribe(
      res=>{
        console.log(res)
        this.getProducts()
      },
      err=>{
        console.error(err)
      }
    )
  }
}
