import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ShoppingcartService } from 'src/app/services/shoppingcart.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {

  products:any = [];
  user:User;

  constructor(private cartService:ShoppingcartService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("currentUser"));
    this.getProducts();
    console.log(this.products)
  }

  getProducts():void{
    this.cartService.getMyShoppingCart(this.user.idSystemUser).subscribe(
      res =>{
        this.products = res;
      },
      err => {
        console.error(err);
      }
    );
  }

  cleanCart():void{
    this.cartService.cleanCart(this.user.idSystemUser).subscribe(
      res =>{
        console.log(res);
      },
      err =>{
        console.error(err);
      }
    );
  }

}
