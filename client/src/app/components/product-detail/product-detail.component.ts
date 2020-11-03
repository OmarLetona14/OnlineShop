import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import {Router, ActivatedRoute} from '@angular/router'
import { CommentsService } from 'src/app/services/comments.service';
import { LikesService } from 'src/app/services/likes.service';
import { Like } from 'src/app/models/like';
import {User} from '../../models/user'
import { Like_post } from 'src/app/models/like_post';
import {Comment} from '../../models/comment'
import { ComplainService } from 'src/app/services/complain.service';
import { Complain } from 'src/app/models/complain';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  commentComplain:string;
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
  }
  n_comment:Comment ={
    idcomment_publication: "",
    publish_date:"",
    comment_content:"",
    idsystemuser:"",
    idpublication:"",
    names:"",
    last_name:"",
    image_path:""
  }

  complain:Complain = {
    idcomplain:"",
    idpublication: "",
    product_name: "",
    image_path: "",
    idsystemuser: "",
    names:"",
    last_name:"",
    email:"",
    reason:"",
    checked:""
  }

  constructor(private productsService:ProductsService, private activedRoute:ActivatedRoute, private commentsService:CommentsService,
    private likesService:LikesService, private complainService:ComplainService) { }

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
          if(res[0].LIKE_STATE == "N" || res[0].LIKE_STATE == null || res[0].LIKE_STATE == undefined){
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

  createAlert(){
    let alt = document.getElementById('alert_comment');
    if (alt.childElementCount < 1){
        let alert_nocredentials = document.createElement('div')
      let strong = document.createElement('strong')
      let btn = document.createElement('button')
      let span = document.createElement('span');
      span.setAttribute('aria-hidden', 'true');
      btn.addEventListener("click", ()=>{
        const container = document.getElementById('alert_comment');
        while (container.firstChild) {
          container.removeChild(container.lastChild);
        }
      });
      span.textContent = 'x'
      btn.setAttribute('class', 'close');
      btn.setAttribute('data-dismiss','alert');
      btn.setAttribute('aria-label', 'Close');
      btn.appendChild(span)
      strong.textContent = 'Se agrego su comentario'
      alert_nocredentials.setAttribute('class', 'alert alert-success alert-dismissible fade show')
      alert_nocredentials.setAttribute('role','alert')
      alert_nocredentials.appendChild(strong)
      alert_nocredentials.appendChild(btn)
      alt.appendChild(alert_nocredentials)
    }
  }

  createAlertComplain(){
    let alt = document.getElementById('alert_complain');
    if (alt.childElementCount < 1){
        let alert_nocredentials = document.createElement('div')
      let strong = document.createElement('strong')
      let btn = document.createElement('button')
      let span = document.createElement('span');
      span.setAttribute('aria-hidden', 'true');
      btn.addEventListener("click", ()=>{
        const container = document.getElementById('alert_complain');
        while (container.firstChild) {
          container.removeChild(container.lastChild);
        }
      });
      span.textContent = 'x'
      btn.setAttribute('class', 'close');
      btn.setAttribute('data-dismiss','alert');
      btn.setAttribute('aria-label', 'Close');
      btn.appendChild(span)
      strong.textContent = 'Su denuncia ha sido enviada a revision'
      alert_nocredentials.setAttribute('class', 'alert alert-success alert-dismissible fade show')
      alert_nocredentials.setAttribute('role','alert')
      alert_nocredentials.appendChild(strong)
      alert_nocredentials.appendChild(btn)
      alt.appendChild(alert_nocredentials)
    }
  }

  complaintM(){
    this.complain.idsystemuser = this.user.idSystemUser;
    this.complain.idpublication = this.product.idPublication;
    this.complain.reason = this.commentComplain;
    delete this.complain.idcomplain;
    delete this.complain.product_name;
    delete this.complain.image_path;
    delete this.complain.names;
    delete this.complain.last_name;
    delete this.complain.email;
    delete this.complain.checked;
    this.complainService.saveComplain(this.complain).subscribe(
      res =>{
        console.log(res);
        this.createAlertComplain();
        this.commentComplain = ""
      },
      err =>{
        console.error(err)
      }
    )
  }

  publishComment(){
    delete this.n_comment.idcomment_publication;
    delete this.n_comment.publish_date;
    delete this.n_comment.names;
    delete this.n_comment.last_name;
    delete this.n_comment.image_path;
    this.n_comment.idsystemuser = this.user.idSystemUser;
    this.n_comment.idpublication = this.product.idPublication;
    console.log(this.n_comment.comment_content)
    this.commentsService.saveComment(this.n_comment).subscribe(
      res=>{
        console.log(res);
        this.getProductDetails();
        this.n_comment.comment_content = ""; 
        this.createAlert()
      },
      err=>{
        console.error(err);
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
        if(res[0].LIKE_STATE == "N" || res[0].LIKE_STATE == null || res[0].LIKE_STATE == undefined
         || res[0] == null){
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
