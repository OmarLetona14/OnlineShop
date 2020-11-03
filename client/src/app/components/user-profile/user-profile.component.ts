import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service'
import {User} from '../../models/user'
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

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
  show:boolean = false;

  constructor(private usersService:UsersService, private router:Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
  }

  showPassword(){
    if (!this.show){
      this.show = true;
    }else{
      this.show = false;
    }
  }

  createAlertEdit(){
    let alt = document.getElementById('alert_edit');
    if (alt.childElementCount < 1){
        let alert_nocredentials = document.createElement('div')
      let strong = document.createElement('strong')
      let btn = document.createElement('button')
      let span = document.createElement('span');
      span.setAttribute('aria-hidden', 'true');
      btn.addEventListener("click", ()=>{
        const container = document.getElementById('alert_edit');
        while (container.firstChild) {
          container.removeChild(container.lastChild);
        }
      });
      span.textContent = 'x'
      btn.setAttribute('class', 'close');
      btn.setAttribute('data-dismiss','alert');
      btn.setAttribute('aria-label', 'Close');
      btn.appendChild(span)
      strong.textContent = 'Su perfil fue actualizado'
      alert_nocredentials.setAttribute('class', 'alert alert-success alert-dismissible fade show')
      alert_nocredentials.setAttribute('role','alert')
      alert_nocredentials.appendChild(strong)
      alert_nocredentials.appendChild(btn)
      alt.appendChild(alert_nocredentials)
    }
  }

  editUser(){
    let id = this.user.idSystemUser;
    console.log(id);
    delete this.user.idSystemUser;
    delete this.user.email;
    delete this.user.credits;
    delete this.user.user_type;
    delete this.user.confirmed;
    console.log(this.user)
    this.usersService.updateUser(id, this.user).subscribe(
      res =>{
        console.log(res);
        this.usersService.getUser(id).subscribe(
          res => {
            this.createAlertEdit();
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
          err=>{
            console.error(err);
          }
        )
        this.router.navigate(['/profile']);
      },
      err =>{
        console.error(err);
      }
    );
  }

}
