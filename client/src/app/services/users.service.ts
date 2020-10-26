import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http'
import {User} from '../models/user'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  API_URI = 'http://localhost:3000/api'

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get(this.API_URI + '/users');
  }

  getUser(id: string){
    return this.http.get(`${this.API_URI}/users/${id}`);
  }

  saveUser (p:User){
    return this.http.post(this.API_URI + '/users', p);
  }
  
  deleteUser (id:string){
    return this.http.delete(`${this.API_URI}/users/${id}`);
  }

  updateUser (id:string, p:User): Observable <User>{
    return this.http.put(`${this.API_URI}/users/${id}`, p);
  }
}
