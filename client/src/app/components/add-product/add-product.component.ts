import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../../services/categories.service'
import {Product} from '../../models/product'
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  categories:any = []
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

  constructor(private categoriesService:CategoriesService, private productsService:ProductsService) { }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe(
      res=>{
        this.categories = res;
      },
      err => {
        console.error(err)
      }
    );
  }

  createPublish(){
    console.log(this.product)
  }

}
