import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import {CategoriesService} from '../../services/categories.service'
import {Product} from '../../models/product'
import { ProductsService } from 'src/app/services/products.service';
import {Router, ActivatedRoute} from '@angular/router'

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

  public keyword_str:string

  constructor(private categoriesService:CategoriesService, private productsService:ProductsService, private router:Router, private activedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe(
      res=>{
        this.categories = res;
      },
      err => {
        console.error(err)
      }
    );
    const params = this.activedRoute.snapshot.params
    if (params.id){
      this.productsService.getProduct(params.id).subscribe(
        res =>{
          this.product.product_name = res[0].PRODUCT_NAME
          this.product.product_detail = res[0].PRODUCT_DETAIL
          this.product.price = res[0].PRICE
          this.product.category_name = res[0].CATEGORY_NAME
          this.product.image_path = res[0].IMAGE_PATH
        },
        err =>{
          console.error(err);
        }
      )
    }
  }

  addKeyword(){
    const _span = document.createElement('span');
    _span.setAttribute('class','badge badge-pill badge-success');
    _span.textContent = this.keyword_str
    document.getElementById('keywords').appendChild(_span);
  } 

  deleteKeywords(){
    const container = document.getElementById('keywords');
    while (container.firstChild) {
      container.removeChild(container.lastChild);
    }
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
        this.router.navigate(['/home'])
      },
      err =>{
        console.error(err)
      }
    )
    console.log(this.product)
  }

}
