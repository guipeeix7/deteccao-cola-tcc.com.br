import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment'
import { Roles } from './roles';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  private API_URL = environment.API_URL;

  constructor(private http:HttpClient) { }

  listAllRoles() {
    return this.http.get<Roles>(this.API_URL+"/role");
  }

  getDataById(id :number): Observable<any>{
    return this.http.get<Roles>(this.API_URL+'role'+'/'+id);
  }

  updateDataInputs(routeFragment:string, id:number, formData:any): Observable<any> {
    return this.http.put<any>(this.API_URL+routeFragment+'/'+id, formData);
  }

  getAll() {
    return this.http.get<Roles[]>(this.API_URL+"roles-all");
  }

  createRole(urlFragment:string, formData:any):Observable<any>  {
    return this.http.post<any>(this.API_URL+urlFragment, formData);
  }
}
