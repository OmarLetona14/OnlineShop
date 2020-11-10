import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http'
import {Log} from '../models/log'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  API_URI = 'http://localhost:3000/api'

  constructor(private http:HttpClient) { }

  getLogs(){
    return this.http.get(this.API_URI + '/log');
  }

  saveLog (p:Log){
    return this.http.post(this.API_URI + '/log', p);
  }
  
}
