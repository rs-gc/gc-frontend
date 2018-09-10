import { Injectable } from  '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class APIService {
  API_URL = 'http://localhost:8000/api';
  
  constructor(private httpClient: HttpClient) { }

  getItems(){
    return this.httpClient.get(`${this.API_URL}/product/items/`);
  }

  sendOtp(mobile_number) {
    console.log(mobile_number)
    return this.httpClient.post(`${this.API_URL}/usermodule/mobile/send_otp/`, {
      mobile_number
    });
  }

  verifyOtp(mobile_number, otp) {
    console.log(mobile_number)
    return this.httpClient.post(`${this.API_URL}/usermodule/mobile/verify_otp/`, {
      mobile_number,
      otp
    });
  }

  checkValidUser() {
    return this.httpClient.get(`${this.API_URL}/usermodule/`)
  }

  // Checks if the user is logged in or not
  isLoggedIn() {
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token')
  }
}