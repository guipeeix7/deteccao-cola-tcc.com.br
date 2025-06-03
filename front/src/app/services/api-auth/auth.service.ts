import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpErrorHandlerService } from '../http-errors/http-error-handler.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_URL= environment.API_URL;
  constructor(private http: HttpClient, private httpErrorHandler: HttpErrorHandlerService) { }

  getCrsfToken(): Observable<HttpResponse<any>>{
    return this.http.get<any>(this.API_URL+'sanctum/csrf-cookie')
  }

  getUpdatedCrsfToken():Observable<HttpResponse<any>>{
    return this.http.get<any>(this.API_URL+'sanctum/csrf-cookie', {  observe: 'response'  })
  }

  getIfIsLogged():Observable<HttpResponse<any>>{
    return this.http.get<any>(this.API_URL+'checkLogged', { observe: 'response' })
  }

  login(formData:any):Observable<HttpResponse<any>>  {
    return this.http.post<any>(this.API_URL+'login',formData, {  observe: 'response'  }).pipe(
      // retry(1),

      catchError(this.httpErrorHandler.handleError)
    )
  }

  getUserPermission(){
    return this.http.get<any>(this.API_URL+'roles-user')
  }
  getLoggedUserInfo(){
    return this.http.get<any>(this.API_URL+'current-user')
  }

  register(formData:any){
    return this.http.post(this.API_URL+'register', formData).pipe(
      retry(1),
      catchError(this.httpErrorHandler.handleError)
    );
  }

}
