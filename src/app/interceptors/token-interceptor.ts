import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { APIService } from 'src/app/services/api.service';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const apiService = this.injector.get(APIService);
    return next.handle(req.clone({
      setHeaders: {
        Authorization: `Bearer ${apiService.getToken()}`
      }
    }));
  }
}
