import { Component, Input } from '@angular/core';
import { Cart, CartProducts } from '@annuadvent/ngx-core/helpers-ecommerce';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'anu-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cart: Cart = null;
  cartProducts: CartProducts = null;

  constructor(public cartS: CartService) {
    this.cartS.cart.subscribe((cart) => (this.cart = cart));
    this.cartS.cartProducts.subscribe(
      (cartProducts) => (this.cartProducts = cartProducts)
    );
  }
}
