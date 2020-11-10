import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http'
import {Category} from '../models/category'
import { Observable } from 'rxjs';
import { Recovery } from '../models/recovery';

@Injectable({
  providedIn: 'root'
})
export class EmailsenderService {

  API_URI = 'http://localhost:3000/api'

  constructor(private http:HttpClient) { }

  public sendEmail(r:Recovery){
    return this.http.post(this.API_URI + '/email', r);
  }
}
