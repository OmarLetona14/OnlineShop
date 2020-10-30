import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import {Router, ActivatedRoute} from '@angular/router'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  likecount = 0
  comments:any = []

  product:Product = {
    idPublication: 0,
    product_name: "",
    product_detail: "", 
    price: 0,
    category_name: "", 
    idSystemUser: 0,
    names:"",
    last_name:"", 
    publish_date:"",
    image_path:"",
    visible_publication:""
  };

  constructor(private productsService:ProductsService, private activedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params
    this.productsService.getProduct(params.id).subscribe(
      res =>{
        this.product.product_name = res[0].PRODUCT_NAME;
        this.product.product_detail = res[0].PRODUCT_DETAIL;
        this.product.price = res[0].PRICE;
        this.product.names = res[0].NAMES;
        this.product.last_name = res[0].LAST_NAME;
        this.product.image_path = res[0].IMAGE_PATH;
        this.product.publish_date = res[0].PUBLISH_DATE;
        this.product.category_name = res[0].CATEGORY_NAME;
      },
      err=>{
        console.error(err)
      }
    )
  }

}
