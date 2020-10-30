import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { User } from 'src/app/models/user';
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

  user:User ={
    names: "",
    last_name: "",
    email: "",
    user_password: "",
    birthdate: "",
    credits:0,
    user_type: "",
    confirmed:"",
    country_name: "",
    image_path: ""
  }

  constructor(private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  login():void{
    this.loginService.doLogin(this.log).subscribe(
      res =>{
        if (res[0] != null){
          if (res[0].CONFIRMED == 'N'){
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
            let user_string = JSON.stringify(this.user)
            localStorage.setItem('currentUser', user_string);
            window.location.replace('/home')
            //this.router.navigate(['/home']);
          }
        }else{
          this.createAlert()
        }
      },
      err =>{
        console.log(err)
      }
    )
  }

  createAlert(){
    let alt = document.getElementById('alert_login');
    if (alt.childElementCount < 1){
        let alert_nocredentials = document.createElement('div')
      let strong = document.createElement('strong')
      let btn = document.createElement('button')
      let span = document.createElement('span');
      span.setAttribute('aria-hidden', 'true');
      btn.addEventListener("click", ()=>{
        const container = document.getElementById('alert_login');
        while (container.firstChild) {
          container.removeChild(container.lastChild);
        }
      });
      span.textContent = 'x'
      btn.setAttribute('class', 'close');
      btn.setAttribute('data-dismiss','alert');
      btn.setAttribute('aria-label', 'Close');
      btn.appendChild(span)
      strong.textContent = 'Credenciales incorrectas'
      alert_nocredentials.setAttribute('class', 'alert alert-warning alert-dismissible fade show')
      alert_nocredentials.setAttribute('role','alert')
      alert_nocredentials.appendChild(strong)
      alert_nocredentials.appendChild(btn)
      alt.appendChild(alert_nocredentials)
    }
  }
}
