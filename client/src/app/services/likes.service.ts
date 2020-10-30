import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';
import {Like} from '../models/like'
import { Like_post } from '../models/like_post';

@Injectable({
  providedIn: 'root'
})
export class LikesService {

  
  API_URI = 'http://localhost:3000/api'

  constructor(private http:HttpClient) { }

  getByPublication(id:string){
    return this.http.get(`${this.API_URI}/likes/${id}`);
  }

  getByUser(id:string, l:Like_post){
    return this.http.post(`${this.API_URI}/likes/${id}`,l);
  }

  saveLike (p:Like){
    return this.http.post(this.API_URI + '/likes', p);
  }

}
