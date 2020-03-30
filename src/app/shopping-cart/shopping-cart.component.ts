import { Component, OnInit } from '@angular/core';
import { RestConnectionService } from '../services/rest-connection.service';

export class Cart {
  id: string;
  name: string;
  description: string;
  price: string;
  quantity: string;
}

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private restService: RestConnectionService) { }

  displayedColumns: string[] = ['name', 'price', 'description', 'quantity', 'removeBtn'];
  dataSource: Cart[];

  ngOnInit() {
    this.restService.getCartItems().subscribe((data: string[]) => {
      let dataSource = [];
      for(let dataPiece of data) {
        let counter = 0;
        let cartItem = new Cart;
        for(let value of dataPiece) {
          switch (counter) {
            case 0:
              cartItem.id = value;
              break;
            case 1:
              cartItem.name = value;
              break;
            case 2:
              cartItem.price = value;
              break;
            case 3:
              cartItem.description = value;
              break;
            case 4:
              cartItem.quantity = value;
              break;
          }
          counter++;
        }
        dataSource.push(cartItem);
      }
      this.dataSource = dataSource;
    });
  }
  
  remove(id: number) {
    this.restService.deleteFromCart(id);
  }

}
