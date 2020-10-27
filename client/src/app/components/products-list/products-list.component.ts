import { Component, HostBinding, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
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
