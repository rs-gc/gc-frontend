import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { APIService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector: Injector) { }

  intercept(request, next) {
    let apiService = this.injector.get(APIService)
    let tokenizedRequest = request.clone({
      setHeader: {
        Authorization: `Bearer ${apiService.getToken()}`
      }
    })
    return next.handle(tokenizedRequest)
  }
}
