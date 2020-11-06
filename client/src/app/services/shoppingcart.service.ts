import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http'
import {ShoppingCart} from '../models/shoppingcart'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShoppingcartService {

  API_URI = 'http://localhost:3000/api'

  constructor(private http:HttpClient) { }

  public getMyShoppingCart(id: string){
    return this.http.get(`${this.API_URI}/shoppingcart/${id}`);
  }

  public saveMyProduct (p:ShoppingCart){
    return this.http.post(this.API_URI + '/shoppingcart', p);
  }
  
  public cleanCart (id:string){
    return this.http.delete(`${this.API_URI}/shoppingcart/${id}`);
  }

}
