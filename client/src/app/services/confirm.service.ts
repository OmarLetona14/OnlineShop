import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {

  API_URI = 'http://localhost:3000/api'

  constructor(private http:HttpClient) { }

  confirmUser(id: string){
    return this.http.get(`${this.API_URI}/confirm/${id}`);
  }
}
