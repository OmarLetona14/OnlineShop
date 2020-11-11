import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http'
import { Recovery } from '../models/recovery';

@Injectable({
  providedIn: 'root'
})
export class EmailconfirmationService {

  API_URI = 'http://localhost:3000/api'

  constructor(private http:HttpClient) { }

  public sendConfirmationEmail(r:Recovery){
    return this.http.post(this.API_URI + '/confirmation', r);
  }
}
