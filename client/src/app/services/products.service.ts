import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http'
import {Product} from '../models/product'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  API_URI = 'http://localhost:3000/api'

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get(this.API_URI + '/products');
  }

  getProduct(id: string){
    return this.http.get(`${this.API_URI}/products/${id}`);
  }

  saveProduct (p:Product){
    return this.http.post(this.API_URI + '/products', p);
  }
  
  deleteProduct (id:string){
    return this.http.delete(`${this.API_URI}/products/${id}`);
  }

  updateGame (id:string, p:Product): Observable <Product>{
    return this.http.put(`${this.API_URI}/products/${id}`, p);
  }
}
