import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Permissions } from './../../roles-permissions/permissions/permissions';
import { environment } from '../../../../environments/environment'
import { List } from '../../list/list';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {
  private API_URL = environment.API_URL;

  constructor(private http:HttpClient) { }

  getAll() {
    return this.http.get<Permissions[]>(this.API_URL+"permission-all");
  }
}
