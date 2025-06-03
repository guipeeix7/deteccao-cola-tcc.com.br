import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private API_URL= environment.API_URL;

  constructor(private http: HttpClient, ) { }

  ngOnInit(): void {
  }

  getProfile() {
    return this.http.get<any>(this.API_URL+"profile");
  }

  updateProfile(formData:any){
    return this.http.put<any>(this.API_URL+'user-confirm-info',formData);
  }
  deleteAccount(){
    return this.http.post<any>(this.API_URL+'request-account-deletion',[]);
  }
  cancelAccountDeletion(){
    return this.http.post<any>(this.API_URL+'cancel-account-deletion',[]);
  }
}
