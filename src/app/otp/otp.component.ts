import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  
  fullImagePath: string;
  
  constructor(private apiService: APIService, private router: Router) { 
    this.fullImagePath = './assets/images/vegetables-new.jpg'
  }

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault()
    const target = event.target;
    let mobile_number = JSON.parse(localStorage.getItem('mobile_number'));
    const otp = target.querySelector('#otp').value;

    mobile_number = mobile_number == null ? alert('Mobile number not present.') : mobile_number;

    this.apiService.verifyOtp(mobile_number, otp).subscribe((data: {is_success: boolean, data: {token: string, profile_uuid: string}}) =>{
      console.log(data)
      if(data.is_success) {
        console.log('user is logged in');
        console.log(data.data);
        localStorage.setItem('gc_token', data.data.token)
        // TODO check if the cart is empty send to items else send to cart.
        this.router.navigate(['/items']);
      }
      else {
        alert('Some Error occured. Please contact someone from the team.');
      }
    });
    
    console.log(event)
    console.log(mobile_number)
  }

}
