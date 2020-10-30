import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http'
import {Comment} from '../models/comment'

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  API_URI = 'http://localhost:3000/api'

  constructor(private http:HttpClient) { }

  getAllCommentsFromPublish(id:string){
    return this.http.get(`${this.API_URI}/comments/${id}`);
  }

  saveComment(c:Comment){
    return this.http.post(this.API_URI + "/comments", c);
  }
}
