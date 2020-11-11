import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http'
import {User} from '../models/user'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserinsertedService {

  API_URI = 'http://localhost:3000/api'

  constructor(private http:HttpClient) { }

  getUserInserted (p:User){
    return this.http.post(this.API_URI + '/userinserted', p);
  }
}
