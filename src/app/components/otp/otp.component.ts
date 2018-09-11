import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from 'src/app/services/api.service';
import { AppConstants } from 'src/app/const/appConst';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  fullImagePath: string;

  constructor(private apiService: APIService, private router: Router) {
    this.fullImagePath = AppConstants.USER_IMAGE;
  }

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault()
    const target = event.target;
    let mobile_number = JSON.parse(localStorage.getItem('mobile_number'));
    const otp = target.querySelector('#otp').value;

    mobile_number = mobile_number == null ? alert('Mobile number not present.') : mobile_number;

    this.apiService.verifyOtp(mobile_number, otp).subscribe(
      (data: OtpResponse) => {
      console.log(data);
      if (data.is_success) {
        console.log('user is logged in');
        console.log(data.data);
        localStorage.setItem('gc_token', data.data.token)
        // TODO check if the cart is empty send to items else send to cart.
        this.router.navigate(['/items']);
      } else {
        alert(AppConstants.LOGIN_FAILURE);
      }
    });

    console.log(event)
    console.log(mobile_number)
  }

}

export interface OtpResponse {
  is_success: boolean;
  data: { token: string, profile_uuid: string };
};