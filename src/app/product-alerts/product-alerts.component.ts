// import { Component, OnInit } from '@angular/core';
import { Product } from '../products';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent  {

  @Input() product!: Product;
  

}
