import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http'
import {Complain} from '../models/complain'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ComplainService {

  API_URI = 'http://localhost:3000/api'

  constructor(private http:HttpClient) { }

  getComplains(){
    return this.http.get(this.API_URI + '/complain');
  }

  acceptComplain(id:String){
    return this.http.get(`${this.API_URI}/complain/${id}`);
  }

  saveComplain (c:Complain){
    return this.http.post(this.API_URI + '/complain', c);
  }

}
