import { Component, HostBinding, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { ShoppingCart } from 'src/app/models/shoppingcart';
import { CategoriesService } from 'src/app/services/categories.service';
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

  constructor(private productService:ProductsService, private categoryService:CategoriesService,
    private cartService:ShoppingcartService) { }

  cart:ShoppingCart = {
    idsystemuser: "",
    idpublication: "",
    cantidad:""
  };
  user:User;
  categories:any = [];
  categoryName:String;
  empty:boolean = false;

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
    
  }

  getProducts():void{
    this.productService.getProducts().subscribe(
      res => {
        this.products = res;
      },
      err => console.error(err)
    );
  }
  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
    this.user = JSON.parse(localStorage.getItem("currentUser"));
    if (this.products.length >1){
      this.empty = true;
    }
  }

  public addToShopingCart(id:string){
    this.cart.idsystemuser = this.user.idSystemUser;
    this.cart.idpublication = id;
    this.cart.cantidad = this.cantidad;
    this.cartService.saveMyProduct(this.cart).subscribe(
      res => {
        console.log(res);
        
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
