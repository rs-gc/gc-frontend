import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class APIService {

  constructor(private httpClient: HttpClient) { }

  getItems() {
    return this.httpClient.get(`${environment.API_URL}/product/items/`);
  }

  sendOtp(mobile_number) {
    console.log(mobile_number);
    return this.httpClient.post(`${environment.API_URL}/usermodule/mobile/send_otp/`, {
      mobile_number
    });
  }

  verifyOtp(mobile_number, otp) {
    console.log(mobile_number);
    return this.httpClient.post(`${environment.API_URL}/usermodule/mobile/verify_otp/`, {
      mobile_number,
      otp
    });
  }

  checkValidUser() {
    return this.httpClient.get(`${environment.API_URL}/usermodule/`)
  }

  // Checks if the user is logged in or not
  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getCartItems() {
    return this.httpClient.get(`${environment.API_URL}/cart/items/`)
  }

  addCartItems(item_list) {
    return this.httpClient.get(`${environment.API_URL}/cart/add/items/`)
  }

  getAddresses() {
    return this.httpClient.get(`${environment.API_URL}/addresses/get/`)
  }

}