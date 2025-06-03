import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,

} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthService } from './../services/api-auth/auth.service'

@Injectable()
export class AuthResponseInterceptor implements HttpInterceptor {

  constructor(private authService:  AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap({
        next: (event) => {
          if (event instanceof HttpResponse) {
            if(event.status == 401) {
              alert('Unauthorized access!')
            }
            else if(event.status == 419){
              this.authService.getUpdatedCrsfToken().subscribe()
              console.log(event)
            }
          }
          return event;
        },
        error: (error) => {
          // gui@gmail.com
          if(error.status === 401) {
            alert('Unauthorized access!')
          }
          else if(error.status === 419) {
            return this.authService.getUpdatedCrsfToken().subscribe()
          }
          else if(error.status === 404) {
            alert('Page Not Found!')
          }
        }
      }));
  }
}
