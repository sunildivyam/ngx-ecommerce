import { Injectable } from '@angular/core';
import { Wishlist } from '@annuadvent/ngx-core/helpers-ecommerce';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private $wishlist = new BehaviorSubject<Wishlist>(null);

  public get wishlist(): Observable<Wishlist> {
    return this.$wishlist.asObservable();
  }

  constructor() {}

  public add(productId: string): void {
    const existingPIds = this.$wishlist.value.productIds || [];
    !existingPIds.includes(productId) &&
      this.$wishlist.next({
        ...this.$wishlist.value,
        productIds: [productId, ...existingPIds]
      });
  }

  public remove(productId: string): void {
    const existingPIds = this.$wishlist.value.productIds || [];
    existingPIds.includes(productId) &&
      this.$wishlist.next({
        ...this.$wishlist.value,
        productIds: existingPIds.filter((pid) => pid !== productId)
      });
  }
}
