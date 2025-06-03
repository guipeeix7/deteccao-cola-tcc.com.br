import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment'
import { Roles } from './roles/roles';
import { Permissions } from './permissions/permissions';
import { Observable, tap } from 'rxjs';
import { List } from '../list/list';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RolesPermissionsService {
  API_URL = environment.API_URL;
  constructor(private http:HttpClient) { }

  listAllRoles(page, query): Observable<List[]>  {

    let queryParams = new HttpParams();
    queryParams = queryParams.append("page",page);
    queryParams = queryParams.append("name",query);
    queryParams = queryParams.append("per_page",5);

    return this.http.get<List[]>(this.API_URL+"role", {params:queryParams})
      .pipe(
          map( res => {
            res['data'] as Roles;
            return res;
         })
      );
    ;
  }

  listAllPermissions(): Observable<Permissions[]>  {

    return this.http.get<Permissions[]>(this.API_URL+"permissions");
  }

}
