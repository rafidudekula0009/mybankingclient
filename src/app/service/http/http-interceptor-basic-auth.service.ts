import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
//we have to configure provider for this interceptor to work inside the app.module.ts
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let username = 'user'
    let password = 'user'
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password)
    request = request.clone({
      setHeaders: {
        Authorization: basicAuthHeaderString
      }
    })
    return next.handle(request);
  }
}
