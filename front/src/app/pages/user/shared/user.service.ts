import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { environment } from 'src/environments/environment'
import { List } from '../../../services/list/list';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http:HttpClient) { }
  private API_URL = environment.API_URL;

  // listAllUsers() {
  //   return this.http.get<any>(this.API_URL+"/user");
  // }
  registerUser(userData: any) {
    return this.http.post(this.API_URL+'register', userData);
  }



    // register(formData:any){
    //   return this.http.post(this.API_URL+'register', formData).pipe(
    //     retry(1),
    //     catchError(this.httpErrorHandler.handleError)
    //   );
    // }

  getDataById(id :number): Observable<any>{
    return this.http.get<User>(this.API_URL+'user'+'/'+id);
  }

  getUserData():Observable<any>{
    return this.http.get<User>(this.API_URL+'current-user');
  }

  updateDataInputs(id:number, formData:any): Observable<any> {
    // return this.http.post<User>(this.API_URL+'user/'+id, formData);
    return this.http.post<any>(this.API_URL+'user/'+id, formData, {
      reportProgress: true, observe: "events"
    });
  }

  deleteUsersByRequest(id){
    return this.http.post<User>(this.API_URL+'delete-user-by-demand/'+id, []);
  }

  assignUserType(id:number, userType: string){
    return this.http.post<any>(this.API_URL+'assign-user-type/'+userType+"/"+id, []);
  }

  updateCurrentUserInfo(formData:any){
    return this.http.put<any>(this.API_URL+'user-confirm-info', formData);
  }

  listAll(page, query, searchable, userType, email, status = ''){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("page",page);
    queryParams = queryParams.append(searchable ,query);
    queryParams = queryParams.append("userType" ,userType);
    queryParams = queryParams.append("status" ,status);
    queryParams = queryParams.append("email" ,email);
    queryParams = queryParams.append("per_page",15);

    return this.http.get<List>(this.API_URL+'user', {params:queryParams});
  }

  getQuestionsStats(){
    return this.http.get<any>(this.API_URL+'student-overview')
  }
  getInvoices(){
    return this.http.get<any>(this.API_URL+'payments/user-payments')
  }
  getInvoiceById(id){
    return this.http.get<any>(this.API_URL+'payments/user-payment/'+id)
  }
  logout(): Observable<any> {
    return this.http.post<any>(this.API_URL+'logout', []);
  }
  getQuestionsStatsBySubject(idAssunto:number):Observable<any>{
    return this.http.get<any>(this.API_URL+'user-results-by-subject/'+idAssunto)
  }
}
