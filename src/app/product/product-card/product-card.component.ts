import {Component, OnInit, Input} from '@angular/core';
import {Product} from "../product.service";
import {CartService} from "../../cart/cart.service";

@Component({
  selector: 'db-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() productRow!: Product[];

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
  }

  setClasses(product: Product) {
    return {
      'card-danger': product.isSpecial,
      'card-inverse': product.isSpecial
    };
  }

  buy(product: Product) {
    this.cartService.addProduct(product)
  }


}
