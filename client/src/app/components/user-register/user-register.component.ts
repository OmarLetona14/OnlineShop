import { Component, OnInit } from '@angular/core';

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
    user_type: "Cliente",
    country_name: "",
    image_path: ""
  }

  constructor(private userService:UsersService) { }

  ngOnInit(): void {
  }

  public register():void{
    this.userService.saveUser(this.user).subscribe(
      res =>{
        console.log(res)
      },
      err =>{
        console.error(err)
      }
    )
  }

}
