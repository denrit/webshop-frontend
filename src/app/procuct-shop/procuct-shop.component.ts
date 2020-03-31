import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { RestConnectionService } from '../services/rest-connection.service';

@Component({
  selector: 'app-procuct-shop',
  templateUrl: './procuct-shop.component.html',
  styleUrls: ['./procuct-shop.component.scss']
})
export class ProcuctShopComponent implements OnInit {

  constructor(private restService: RestConnectionService) { }

  displayedColumns: string[] = ['name', 'price', 'description', 'buyBtn'];
  dataSource;

  ngOnInit() {
    this.restService.getProducts().subscribe((data: Product[]) => {
      this.dataSource = data;
    });
  }
  
  buy(id: number) {
    let stringId = `${id}`;
    alert(stringId);
    this.restService.moveToCart(stringId);
  }

}
