import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
import {LoginService} from '../../services/login.service'

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  log:Login = {
    email: "",
    user_password: ""
  }

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

  login(){
    this.loginService.doLogin(this.log).subscribe(
      res =>{
        console.log(res)
      },
      err =>{

      }
    )

  }

}
