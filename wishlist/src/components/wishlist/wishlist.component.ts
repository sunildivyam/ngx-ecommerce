import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../../services/wishlist.service';
import {
  Product,
  ProductQueryService
} from '@annuadvent/ngx-core/helpers-ecommerce';

@Component({
  selector: 'anu-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  products: Array<Product> = [];

  constructor(private wS: WishlistService, private pqS: ProductQueryService) {
    wS.wishlist.subscribe((w) => {
      w?.productIds?.length &&
        this.pqS
          .getProductsByIds(w.productIds)
          .then((pS) => (this.products = pS))
          .catch((err) => (this.products = []));
    });
  }

  ngOnInit(): void {
    this.wS.getWishlist();
  }
}
