import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http'
import {Category} from '../models/category'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltercategoryService {

  API_URI = 'http://localhost:3000/api'

  constructor(private http:HttpClient) { }

  getFilterProducts(c:Category){
    return this.http.post(this.API_URI + '/filtercategory', c);
  }
}
