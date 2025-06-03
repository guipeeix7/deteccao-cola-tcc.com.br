import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { AuthService } from './../services/api-auth/auth.service'

import { Observable } from 'rxjs';
import {HttpXsrfTokenExtractor } from '@angular/common/http';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  headerName = 'X-XSRF-TOKEN';
  constructor(private tokenService: HttpXsrfTokenExtractor, public authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler):
  Observable<HttpEvent<any>> {
    req = req.clone({
      withCredentials: true,
      // setHeaders: {
      //   'Content-Type' : 'application/json'
      // }
    });

    if (req.method === 'GET' || req.method === 'HEAD') {
      return next.handle(req);
    }

    const token = this.tokenService.getToken();
    if (token !== null && !req.headers.has(this.headerName)) {
      req = req.clone({headers: req.headers.set(this.headerName, token)});
    }
    return next.handle(req)
  }
}
