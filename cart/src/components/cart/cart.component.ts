import { Component, Inject, Input } from '@angular/core';
import {
  Cart,
  CartProducts,
  InCartProduct,
  Product
} from '@annuadvent/ngx-core/helpers-ecommerce';
import { CartService } from '../../services/cart.service';
import { WishlistService } from '@annuadvent/ngx-ecommerce/wishlist';
import { DEFAULT_PRODUCT_IMAGE_PROVIDER } from '@annuadvent/ngx-ecommerce/product-thumb';
import { AddressService } from '@annuadvent/ngx-ecommerce/address';

@Component({
  selector: 'anu-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  @Input() href: string = '';

  cart: Cart = null;
  cartProducts: CartProducts = null;

  totalMrp: number = 0;
  totalDiscount: number = 0;
  convinienceFee: number = 30;
  shippingFee: number = 60;
  totalToPay: number = 0;

  constructor(
    public cartS: CartService,
    private wS: WishlistService,
    public adS: AddressService,
    @Inject(DEFAULT_PRODUCT_IMAGE_PROVIDER) public defaultProductImage: string
  ) {
    this.cartS.cart.subscribe((cart) => (this.cart = cart));
    this.cartS.cartProducts.subscribe((cartProducts) => {
      this.cartProducts = cartProducts;
      this.calculatePriceSummary();
    });
  }

  private calculatePriceSummary(): void {
    this.totalMrp = 0;
    this.totalDiscount = 0;

    this.cart.products.forEach((cP) => {
      const mrp = this.cartProducts[cP.id]?.price[cP.size] || 0;
      const discount = this.cartProducts[cP.id]?.offer[cP.size] || 0;

      const qty = cP.qty;
      this.totalMrp += qty * mrp;
      this.totalDiscount += (discount * (qty * mrp)) / 100;

      this.totalToPay =
        this.totalMrp +
        this.convinienceFee +
        this.shippingFee -
        this.totalDiscount;
    });
  }
  public onRemoveItem(product: Product, size: string): void {
    this.cartS.remove(product, size);
  }

  public onWishlistItem(product: Product, size: string): void {
    this.wS.add(product.id);
    this.cartS.remove(product, size);
  }

  public onPlaceOrder(): void {
    this.calculatePriceSummary();
  }

  public onQtyChange(qty, cartP: InCartProduct): void {
    setTimeout(() => {
      cartP.qty = qty;
      this.calculatePriceSummary();
    });
  }

  public onSizeChange(size, cartP: InCartProduct): void {
    setTimeout(() => {
      cartP.size = size;
      this.calculatePriceSummary();
    });
  }
}
