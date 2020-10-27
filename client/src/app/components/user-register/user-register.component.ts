import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {User} from '../../models/user';
import {UsersService} from '../../services/users.service'

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  user:User ={
    names: "",
    last_name: "",
    email: "",
    user_password: "",
    birthdate: "",
    credits:0,
    user_type: "Cliente",
    confirmed:"",
    country_name: "",
    image_path: ""
  }

  constructor(private userService:UsersService, private router:Router) { }

  ngOnInit(): void {
  }

  public register():void{
    delete this.user.confirmed
    delete this.user.credits
    this.userService.saveUser(this.user).subscribe(
      res =>{
        console.log(res)
        this.router.navigate(['/login'])
      },
      err =>{
        console.error(err)
      }
    )
  }

}
