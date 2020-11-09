import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http'
import {Category} from '../models/category'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AscendentpriceService {

  API_URI = 'http://localhost:3000/api'

  constructor(private http:HttpClient) { }

  getAscProducts(){
    return this.http.get(this.API_URI + '/ascprice');
  }
}
