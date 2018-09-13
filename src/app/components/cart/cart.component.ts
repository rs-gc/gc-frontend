import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { APIService } from '../../services/api.service';
import { GetfromcartService } from '../../services/getfromcart/getfromcart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private cartItems: Array<object> = [];

  constructor(private cookieService: CookieService, private getFromCartService: GetfromcartService) { }

  ngOnInit() {
    this.getCartItems();
  }

  getCartItems() {
    this.getFromCartService.getFromCart();
  }
}
