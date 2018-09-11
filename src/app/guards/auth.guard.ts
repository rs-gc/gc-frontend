import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { APIService } from 'src/app/services/api.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private apiService: APIService, private router: Router) { }

  canActivate(): boolean {
    if (this.apiService.isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['user/mobile']);
      return false;
    }
  }
}
