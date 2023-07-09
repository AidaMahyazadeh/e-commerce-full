import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthStorageService } from './auth-storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authStorage :AuthStorageService
    ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.authStorage.getToken();
    if (token){
      request = request.clone({
        setHeaders : {Authorization : `Bearer ${token}`}
      })
    }
    return next.handle(request);
  }
}
