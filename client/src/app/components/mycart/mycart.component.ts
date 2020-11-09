import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bill } from 'src/app/models/bill';
import { User } from 'src/app/models/user';
import { BillService } from 'src/app/services/bill.service';
import { ShoppingcartService } from 'src/app/services/shoppingcart.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {

  products:any = [];
  user:User;
  bill:Bill = {
    idbill:"",
    idsystemuser:"",
    names:"",
    last_name:"",
    email:"",
    date:"",
    total:""
  };

  constructor(private cartService:ShoppingcartService, private billService:BillService, private router:Router) { }
  buying:boolean =false;

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
        if(!this.buying){
          window.location.replace('/mycart')
        }
        this.buying = false;
      },
      err =>{
        console.error(err);
      }
    );
  }

  comprar():void{
    this.bill.idsystemuser = this.user.idSystemUser;
    delete this.bill.idbill;
    delete this.bill.names;
    delete this.bill.last_name;
    delete this.bill.email;
    delete this.bill.date;
    delete this.bill.total;
    this.billService.saveBill(this.bill).subscribe(
      res =>{
        console.log(res);
        this.buying = true;
        this.cleanCart();
        this.router.navigate(['/mybill']);
      },
      err =>{
        console.error(err);
      }

    );

  }

}
