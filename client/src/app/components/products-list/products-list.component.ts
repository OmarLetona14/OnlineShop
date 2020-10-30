import { Component, HostBinding, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import {User} from '../../models/user'
import {ProductsService} from '../../services/products.service'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {

  @HostBinding('class') classes = 'row'
  products:any = [];

  constructor(private productService:ProductsService) { }

  user:User;
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
    this.user = JSON.parse(localStorage.getItem("currentUser"))
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
