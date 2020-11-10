import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http'
import { PasswordRecovery } from '../models/passwordRecovery';

@Injectable({
  providedIn: 'root'
})
export class RecoveryService {

  
  API_URI = 'http://localhost:3000/api'

  constructor(private http:HttpClient) { }

  saveRecovery (p:PasswordRecovery){
    return this.http.post(this.API_URI + '/recovery', p);
  }
}
