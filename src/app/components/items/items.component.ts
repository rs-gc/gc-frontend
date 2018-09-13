import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { AddtocartService } from '../../services/addtocart/addtocart.service'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  quantity: any;
  private items: Array<object> = [];
  private cartItems: Object;


  constructor(
    private apiService: APIService,
    private addToCartService: AddtocartService
  ) { }

  ngOnInit() {
    this.getItems();
  }

  public getItems() {
    this.apiService.getItems().subscribe((data: Array<object>) => {
      this.items = data['data'];
      console.log(this.items);
    });
  }

  public addToCart(this, item_uuid) {
    console.log(item_uuid, this.real_quantity)
    this.addToCartService.addToCart(
      [
        {
          'item_uuid': item_uuid,
          'quantity': this.real_quantity
        }
      ]
    )
  }

}
