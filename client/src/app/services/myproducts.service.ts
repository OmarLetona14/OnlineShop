import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http'
import {Product} from '../models/product'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyproductsService {

  API_URI = 'http://localhost:3000/api'

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get(this.API_URI + '/myproducts');
  }

  getAllProducts(id: string){
    return this.http.get(`${this.API_URI}/myproducts/${id}`);
  }

  getLastInserted (p:Product){
    return this.http.post(this.API_URI + '/myproducts', p);
  }
}
