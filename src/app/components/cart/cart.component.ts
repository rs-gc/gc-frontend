import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: string;

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    // TODO check if the user is logged in,
    // If yes call the API for cart data.
    let token = JSON.parse(localStorage.getItem('token'));

    if (token) {
      // Call API
      if (token) {
        // check if the token is valid
        token = ''
      }
      else {
        // Check if the token is invalid.
        token = ''
      }
    }
  }
}
