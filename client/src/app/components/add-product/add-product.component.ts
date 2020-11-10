import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import {CategoriesService} from '../../services/categories.service'
import {Product} from '../../models/product'
import { ProductsService } from 'src/app/services/products.service';
import {Router, ActivatedRoute} from '@angular/router'
import { Keyword } from 'src/app/models/keyword';
import { KeywordService } from 'src/app/services/keyword.service';
import { User } from 'src/app/models/user';
import {MyproductsService} from '../../services/myproducts.service'
import { Observable } from 'rxjs';
import { Log } from 'src/app/models/log';
import { LogService } from 'src/app/services/log.service';
import { EmailsenderService } from 'src/app/services/emailsender.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  user:User;
  categories:any = []
  createdProduct: Product={
    idPublication: "",
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
  }
  product:Product = {
    idPublication: "",
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
  idpublication = ""
  public key:Keyword = {
    idkeyword_publication:"",
    idkeyword:"",
    idpublication: ""
  }
  log:Log = {
    idLog: "",
    idsystemuser:"",
    email:"",
    action:"",
    datetime:""
  };
  public keyword_str:string
  public keywords: string[] = [];


  constructor(private categoriesService:CategoriesService, private productsService:ProductsService, private router:Router, private activedRoute:ActivatedRoute,
    private keywordsService:KeywordService, private myproductsService:MyproductsService, private logService:LogService, private emailService:EmailsenderService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
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

  saveLog(id:string){
    delete this.log.idLog;
    delete this.log.email;
    delete this.log.datetime;
    this.log.idsystemuser = id;
    this.log.action = 'Agrego un producto'
    this.logService.saveLog(this.log).subscribe(
      res =>{
        console.log(res);
      },
      err =>{
        console.error(err);
      }
    );
  }

  addKeyword(){
    const _span = document.createElement('span');
    _span.setAttribute('class','badge badge-pill badge-success');
    _span.textContent = this.keyword_str
    document.getElementById('keywords').appendChild(_span);
    this.keywords.push(this.keyword_str)
    console.log(this.keywords)
    this.keyword_str = ""
  } 

  deleteKeywords(){
    const container = document.getElementById('keywords');
    while (container.firstChild) {
      container.removeChild(container.lastChild);
    }
    this.keywords = []
    console.log(this.keywords)
  }

  public async createPublish(){
    let id = this.product.idPublication + ''
    delete this.product.idPublication
    delete this.product.names
    delete this.product.last_name
    delete this.product.publish_date
    delete this.product.visible_publication
    delete this.key.idkeyword_publication
    delete this.key.idkeyword
    console.log(this.user)
    this.product.idSystemUser = Number.parseInt(this.user.idSystemUser);
    await this.productsService.saveProduct(this.product).subscribe(
      res=>{
        this.getPublication()
        console.log(this.idpublication)
        setTimeout(this.insertKeywords, 3000)
        this.saveLog(this.user.idSystemUser);
        this.router.navigate(['/myproducts']);
      },
      err =>{
        console.error(err)
      }
    )
    console.log(this.product)
  }

  public insertKeywords(){
    for (let i = 0; i<this.keywords.length; i++) {
      this.key.word = this.keywords[i];
      this.key.idpublication = this.idpublication
      this.keywordsService.saveKeyword(this.key).subscribe(
        res => {
          console.log(res);
        },
        err =>{
          console.error(err);
        }
      );
      this.router.navigate(['/home'])
    }
  }

  getPublication():void{
     this.myproductsService.getLastInserted(this.product).subscribe(
          res =>{
            this.idpublication = res[0];
            console.log(res)
            
          },
          err=>{
            console.error(err);
       }
    )
  }
}
