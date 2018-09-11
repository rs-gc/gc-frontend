import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from 'src/app/services/api.service';
import { AppConstants } from 'src/app/const/appConst';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  fullImagePath: string;
  mobileNumber: any;

  constructor(private apiService: APIService, private router: Router) {
    this.fullImagePath = AppConstants.USER_IMAGE;
  }

  ngOnInit() {
  }

  enterMobile(event) {

    this.apiService.sendOtp(
      this.mobileNumber
    ).subscribe((data: { is_success: boolean, data: Object }) => {
      console.log(data);
      if (data.is_success) {
        localStorage.setItem('mobile_number', this.mobileNumber);
        this.router.navigate(['/user/otp']);
      } else {
        alert(AppConstants.LOGIN_FAILURE);
      }
    });
    console.log(event);
    console.log(this.mobileNumber);
  }

}
