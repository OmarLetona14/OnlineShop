import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http'
import {Category} from '../models/category'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  API_URI = 'http://localhost:3000/api'

  constructor(private http:HttpClient) { }

  getCategories(){
    return this.http.get(this.API_URI + '/categories');
  }

  getCategory(id: string){
    return this.http.get(`${this.API_URI}/categories/${id}`);
  }

  saveCategory (p:Category){
    return this.http.post(this.API_URI + '/categories', p);
  }
  
  deleteCategory (id:string){
    return this.http.delete(`${this.API_URI}/categories/${id}`);
  }

  updateCategory (id:string, p:Category): Observable <Category>{
    return this.http.put(`${this.API_URI}/categories/${id}`, p);
  }
}
