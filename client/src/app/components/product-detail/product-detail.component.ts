import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import {Router, ActivatedRoute} from '@angular/router'
import { CommentsService } from 'src/app/services/comments.service';
import { LikesService } from 'src/app/services/likes.service';
import { Like } from 'src/app/models/like';
import {User} from '../../models/user'
import { Like_post } from 'src/app/models/like_post';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  likecount = 0
  comments:any = []
  like:Like = {
    idpublication:"",
    idsystemuser:"",
    state:""
  }
  user:User;
  like_post:Like_post ={
    idpublication:""
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

  constructor(private productsService:ProductsService, private activedRoute:ActivatedRoute, private commentsService:CommentsService,
    private likesService:LikesService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("currentUser"))
    this.getProductDetails();
  }

  getProductDetails(){
    const params = this.activedRoute.snapshot.params
    this.productsService.getProduct(params.id).subscribe(
      res =>{
        this.product.idPublication = res[0].IDPUBLICATION;
        this.product.product_name = res[0].PRODUCT_NAME;
        this.product.product_detail = res[0].PRODUCT_DETAIL;
        this.product.price = res[0].PRICE;
        this.product.names = res[0].NAMES;
        this.product.last_name = res[0].LAST_NAME;
        this.product.image_path = res[0].IMAGE_PATH;
        this.product.publish_date = res[0].PUBLISH_DATE;
        this.product.category_name = res[0].CATEGORY_NAME;
        this.commentsService.getAllCommentsFromPublish(this.product.idPublication).subscribe(
          res => {
            this.comments = res;
            console.log(this.comments)
          },
          err=>{
            console.log(err)
          }
        );
      this.likesService.getByPublication(this.product.idPublication).subscribe(
        res =>{
          this.likecount = res[0].LIKES
        },
        err=>{
          console.log(err)
        }
      )
      this.like_post.idpublication = this.product.idPublication;
      this.likesService.getByUser(this.user.idSystemUser, this.like_post).subscribe(
        res => {
          if(res[0].LIKE_STATE == "N" || res[0].LIKE_STATE == null || res[0].LIKE_STATE == 'null'
          || res[0] == null || res[0].LIKE_STATE == undefined){
            let buttonLike = document.getElementById("like_button")
            let i_icon = document.createElement("i")
            i_icon.setAttribute("class", "fas fa-thumbs-down")
            buttonLike.textContent = "No me gusta "
            buttonLike.appendChild(i_icon)
          }else if(res[0].LIKE_STATE == "Y"){
            let buttonLike = document.getElementById("like_button")
            let i_icon = document.createElement("i")
            i_icon.setAttribute("class", "fas fa-thumbs-up")
            buttonLike.textContent = "Me gusta "
            buttonLike.appendChild(i_icon)
          }
        },
        err=>{
          console.error(err)
        }
      )
      },
      err=>{
        console.error(err)
      }
    )
  }

  likePublication(){
    let liked:boolean
    this.like.idpublication = this.product.idPublication;
    this.like.idsystemuser = this.user.idSystemUser;
    this.like_post.idpublication = this.product.idPublication;
    this.likesService.getByUser(this.user.idSystemUser, this.like_post).subscribe(
      res=>{
        console.log(res[0].LIKE_STATE)
        if(res[0].LIKE_STATE == "N"){
          this.likecount += 1
          this.like.state = "Y"
          let buttonLike = document.getElementById("like_button")
          while (buttonLike.firstChild) {
            buttonLike.removeChild(buttonLike.lastChild);
          }
          buttonLike.textContent = "Me gusta " + "   "
          let i_icon = document.createElement("i")
          i_icon.setAttribute("class", "fas fa-thumbs-up")
          buttonLike.appendChild(i_icon)
        }else if (res[0].LIKE_STATE == "Y"){
          this.likecount -= 1
          this.like.state = "N"
          let buttonLike = document.getElementById("like_button")
          while (buttonLike.firstChild) {
            buttonLike.removeChild(buttonLike.lastChild);
          }
          let i_icon = document.createElement("i")
          buttonLike.textContent = "No me gusta " + " "
          i_icon.setAttribute("class", "fas fa-thumbs-down")
          buttonLike.appendChild(i_icon)
        }
      },
      err=>{
        console.error(err)
      }
    )
    this.likesService.saveLike(this.like).subscribe(
      res=>{
        console.log(res)
      },
      err =>{
        console.error(err)
      }
    )
  }

}
