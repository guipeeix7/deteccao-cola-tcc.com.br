import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ResendAccountConfirmEmailService {
  API_URL = environment.API_URL
  constructor(private http:HttpClient) { }
  getUserInfo(){
    return this.http.get<any>(this.API_URL+'profile');
  }

  sendEmailAttempt(){
    return this.http.post<any>(this.API_URL+'email/verification-notification',[]);
  }
}
