import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Permission } from './permission';
@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  constructor(private http:HttpClient) { }
  private API_URL = environment.API_URL;

  listAllPermissions() {
    return this.http.get<any>(this.API_URL+"/orgao");
  }

  getDataById(id :number): Observable<any>{
    return this.http.get<Permission>(this.API_URL+'permission'+'/'+id);
  }

  updateDataInputs(id:number, formData:any): Observable<any> {
    return this.http.put<Permission>(this.API_URL+'permission/'+id, formData);
  }
}
