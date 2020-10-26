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
    idSystemUser: 23,
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

  public createPublish():void{
    delete this.product.idPublication
    delete this.product.names
    delete this.product.last_name
    delete this.product.publish_date
    delete this.product.visible_publication
    this.productsService.saveProduct(this.product).subscribe(
      res=>{
        console.log(res)
      },
      err =>{
        console.error(err)
      }
    )
    console.log(this.product)
  }

}
