import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { Observable, delay, map, of } from 'rxjs';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { List } from '../services/list/list';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  API_URL = environment.API_URL;

  constructor(private http:HttpClient) { }
  isNameTaken: (name: string) => Observable<boolean>;

  uniqueNameValidator(fieldName, fieldValue, urlFragment){
    let queryParams = new HttpParams();
    queryParams = queryParams.append(fieldName, fieldValue);

    return this.http.get<any>(this.API_URL+urlFragment, {params:queryParams});
  }

  createItem(urlFragment:string, formData:any):Observable<any>  {
    return this.http.post<any>(this.API_URL+urlFragment, formData);
  }

  createItemWithFile(urlFragment:string, formData:any){
    return this.http.post<any>(this.API_URL+urlFragment, formData, {
      reportProgress: true, observe: "events"
    });
  }

  updateItemWithFile(urlFragment:string, formData:any){
    /** This is a little weird, but to update routes that contains files (only for them), the only method that actually worked was POST */
    return this.http.post<any>(this.API_URL+urlFragment, formData, {
      reportProgress: true, observe: "events"
    });
  }

  getById(urlFragment , id):any{
    return this.http.get<any>(this.API_URL+urlFragment+"/"+id);
  }

  listAll(urlFragment ,page, query, searchable, per_page=15): Observable<List>  {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("page",page);
    queryParams = queryParams.append(searchable ,query);
    queryParams = queryParams.append("per_page",per_page);

    return this.http.get<List>(this.API_URL+urlFragment, {params:queryParams});
  }

  getBySimpleUrl(urlFragment):any{
    return this.http.get<any>(this.API_URL+urlFragment);
  }

  destroyRow(urlFragment, id){
    return this.http.delete<any>(this.API_URL+urlFragment+'/'+id);
  }
}
