import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recovery } from 'src/app/models/recovery';
import { EmailconfirmationService } from 'src/app/services/emailconfirmation.service';
import { UserinsertedService } from 'src/app/services/userinserted.service';

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

  userInserted:User ={
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
  recovery:Recovery = {
    idsystemuser: "",
    email: ""
  }

  constructor(private userService:UsersService, private router:Router,
     private emailConfirmationService:EmailconfirmationService, private insertedUserService:UserinsertedService) { }

  ngOnInit(): void {
  }

  public register():void{
    delete this.user.confirmed
    delete this.user.credits
    this.userService.saveUser(this.user).subscribe(
      res =>{
        console.log(res);
          delete this.user.country_name;
          delete this.user.image_path;
          this.insertedUserService.getUserInserted(this.user).subscribe(
            res =>{
              console.log(res)
              if (res[0]!=null){
                this.recovery.idsystemuser = res[0].IDSYSTEMUSER;
                this.recovery.email = res[0].EMAIL;
                this.emailConfirmationService.sendConfirmationEmail(this.recovery).subscribe(
                  res =>{
                    console.log(res);
                    this.user = {}
                    
                    this.router.navigate(['/login'])
                  },
                  err =>{
                    console.error(err);
                  }
                );
              }
            },
            err =>{
              console.error(err);
            }
          ); 
      },
      err =>{
        console.error(err)
      }
    )
  }

}
