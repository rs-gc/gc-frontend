import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  fullImagePath: string;
  
  constructor(private apiService: APIService, private router: Router) { 
    this.fullImagePath = './assets/images/vegetables-new.jpg'
  }

  ngOnInit() {
  }

  enterMobile(event) {
    event.preventDefault()
    const target = event.target
    const mobile_number = target.querySelector('#mobile_number').value

    this.apiService.sendOtp(
      mobile_number
    ).subscribe((data: {is_success: boolean, data: Object}) =>{
      console.log(data)
      if(data.is_success) {
        localStorage.setItem('mobile_number', mobile_number)
        this.router.navigate(['/user/otp'])
      }
      else {
        alert('Some Error occured. Please contact someone from the team.');
      }
    });
    
    console.log(event)
    console.log(mobile_number)
  }

}
