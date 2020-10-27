import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service'
import {User} from '../../models/user'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

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

  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    
  }


}
