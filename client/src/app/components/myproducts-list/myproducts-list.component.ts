import { Component, OnInit } from '@angular/core';
import {MyproductsService} from '../../services/myproducts.service'
import {Product} from '../../models/product'
import {User} from '../../models/user'

@Component({
  selector: 'app-myproducts-list',
  templateUrl: './myproducts-list.component.html',
  styleUrls: ['./myproducts-list.component.css']
})
export class MyproductsListComponent implements OnInit {
  products:any = [];
  constructor(private myproductsService:MyproductsService){}
  user:User;
  empty:boolean = false;
  getProducts():void{
    this.myproductsService.getAllProducts(this.user.idSystemUser).subscribe(
      res => {
        this.products = res;
      },
      err => console.error(err)
    );
  }
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("currentUser"))
    this.getProducts();
    if(this.products.length == 0){
      this.empty = true;
    }
  }

  delete(id:string){

  }

}
