import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';
import { Keyword } from '../models/keyword';

@Injectable({
  providedIn: 'root'
})
export class KeywordService {

  API_URI = 'http://localhost:3000/api'

  constructor(private http:HttpClient) { }

  getByPublication(id:string){
    return this.http.get(`${this.API_URI}/keyword/${id}`);
  }

  saveKeyword (p:Keyword){
    return this.http.post(this.API_URI + '/keyword', p);
  }
  
  deleteKeyword (id:string){
    return this.http.delete(`${this.API_URI}/keyword/${id}`);
  }

}
