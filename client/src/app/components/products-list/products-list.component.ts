import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import {ProductsService} from '../../services/products.service'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products:any = [];

  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      res => {
        console.log(res)
        this.products = res;
      },
      err => console.error(err)
    );
  }

}
