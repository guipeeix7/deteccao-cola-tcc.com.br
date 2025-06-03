import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Role } from './role';
import { List } from 'src/app/services/list/list';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  constructor(private http:HttpClient) { }
  private API_URL = environment.API_URL;

  listAllRoles() {
    return this.http.get<any>(this.API_URL+"/role");
  }

  getAll() {
    return this.http.get<Role[]>(this.API_URL+"role");
  }

  getDataById(id :number): Observable<any>{
    return this.http.get<Role>(this.API_URL+'role'+'/'+id);
  }

  updateDataInputs(id:number, formData:any): Observable<any> {
    return this.http.put<Role>(this.API_URL+'role/'+id, formData);
  }

  updateQuestionsInputs(id:number, formData:any): Observable<any> {
    return this.http.put<Role>(this.API_URL+'role/update-questions/'+id, formData);
  }

  listAll(urlFragment ,page, query, searchable, forms): Observable<List>  {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("nomeRole", forms.nomeRole);
    queryParams = queryParams.append("page",forms.page);
    queryParams = queryParams.append("per_page",forms.per_page);
    return this.http.get<List>(this.API_URL+urlFragment, { params:queryParams } );
  }
}
