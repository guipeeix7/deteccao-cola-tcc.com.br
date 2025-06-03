import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from '../list/list';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ListTableService {
  API_URL = environment.API_URL;
  constructor(private http:HttpClient) { }

  listAll(urlFragment ,page, query, searchable): Observable<List>  {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("page",page);
    queryParams = queryParams.append(searchable ,query);
    queryParams = queryParams.append("per_page",5);

    return this.http.get<List>(this.API_URL+urlFragment, {params:queryParams});
  }

  destroyRow(urlFragment, id){
    return this.http.delete<any>(this.API_URL+urlFragment+'/'+id);
  }
}



