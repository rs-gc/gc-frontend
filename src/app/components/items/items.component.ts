import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  private items: Array<object> = [];
  private cartItems: Object;
  constructor(private apiService: APIService) { }

  ngOnInit() {
    this.getItems();
  }

  public getItems() {
    this.apiService.getItems().subscribe((data: Array<object>) => {
      this.items = data['data'];
      console.log(this.items);
    });
  }

  public addToCart(item_uuid) {
    let cookie = '';

  }

}
