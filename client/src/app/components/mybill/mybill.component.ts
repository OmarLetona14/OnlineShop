import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bill } from 'src/app/models/bill';
import { User } from 'src/app/models/user';
import { BillService } from 'src/app/services/bill.service';
import { BilldetailsService } from 'src/app/services/billdetails.service';
import { ShoppingcartService } from 'src/app/services/shoppingcart.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-mybill',
  templateUrl: './mybill.component.html',
  styleUrls: ['./mybill.component.css']
})
export class MybillComponent implements OnInit {

  details:any = [];
  bill:Bill;
  user:User;
  constructor(private billService:BillService, private billdetailsService:BilldetailsService, private router:Router,
    private shoppingcartService:ShoppingcartService, private userService:UsersService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("currentUser"));
    this.getBillDetails();
  }

  getBillDetails(){
    this.shoppingcartService.getMyShoppingCart(this.user.idSystemUser).subscribe(
      res => {
        this.details = res;
        console.log(res);
        this.cleanCart()
        this.updateUser();
      },
      err =>{
        console.error(err);
      }
    );
  }


  updateUser(){
    this.userService.getUser(this.user.idSystemUser).subscribe(
      res => {
            this.user.idSystemUser = res[0].IDSYSTEMUSER;
            this.user.names = res[0].NAMES;
            this.user.last_name = res[0].LAST_NAME;
            this.user.email = res[0].EMAIL;
            this.user.user_password = res[0].USER_PASSWORD;
            this.user.birthdate = res[0].BIRTHDATE;
            this.user.credits = res[0].CREDITS;
            this.user.user_type = res[0].USER_TYPE;
            this.user.confirmed = res[0].CONFIRMED;
            this.user.country_name = res[0].COUNTRY_NAME;
            this.user.image_path = res[0].IMAGE_PATH;
            this.user.user_type = res[0].USER_TYPE;
            let user_string = JSON.stringify(this.user)
            localStorage.setItem('currentUser', user_string);
      },
      err =>{
        console.error(err);
      }
    );
  }

  cleanCart():void{
    this.shoppingcartService.cleanCart(this.user.idSystemUser).subscribe(
      res =>{
        console.log(res);
      },
      err =>{
        console.error(err);
      }
    );
  }
}
