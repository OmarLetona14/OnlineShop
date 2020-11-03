import { Component, HostBinding, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { CategoriesService } from 'src/app/services/categories.service';
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

  constructor(private productService:ProductsService, private categoryService:CategoriesService) { }

  user:User;
  categories:any = [];
  categoryName:String;

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

  getProducts():void{
    this.productService.getProducts().subscribe(
      res => {
        this.products = res;
      },
      err => console.error(err)
    );
  }
  ngOnInit(): void {
    this.getProducts()
    this.getCategories()
    this.user = JSON.parse(localStorage.getItem("currentUser"))
  }

  addToShopingCart(id:string){
    
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
