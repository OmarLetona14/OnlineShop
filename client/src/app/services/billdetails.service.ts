import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http'
import {Bill} from '../models/bill'
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class BilldetailsService {

  API_URI = 'http://localhost:3000/api'

  constructor(private http:HttpClient) { }

  public getBillDetail(id: string){
    return this.http.get(`${this.API_URI}/billdetails/${id}`);
  }
}
