import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {
  API_URL = environment.API_URL;

  constructor(private http:HttpClient) { }
  public resetPass(formData){
    return this.http.post<any>(this.API_URL+'forgot-password', formData);
  }
  public renewPass(formData){
    return this.http.post<any>(this.API_URL+'reset-password', formData);
  }
}
