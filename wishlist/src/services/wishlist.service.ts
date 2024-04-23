import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Wishlist } from '@annuadvent/ngx-core/helpers-ecommerce';
import { BehaviorSubject, Observable, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private $wishlist = new BehaviorSubject<Wishlist>(null);

  public get wishlist(): Observable<Wishlist> {
    return this.$wishlist.asObservable();
  }

  constructor(
    private http: HttpClient,
    @Inject('API_URLS') private API_URLS: any
  ) {}

  public add(productId: string): void {
    const existingPIds = this.$wishlist.value?.productIds || [];

    if (!existingPIds.includes(productId)) {
      const w = {
        ...this.$wishlist.value,
        productIds: [productId, ...existingPIds]
      };
      this.$wishlist.next(w);
      this.updateOrAddWishlistInDb(w);
    }
  }

  public remove(productId: string): void {
    const existingPIds = this.$wishlist.value?.productIds || [];
    if (existingPIds.includes(productId)) {
      const w = {
        ...this.$wishlist.value,
        productIds: existingPIds.filter((pid) => pid !== productId)
      };

      this.$wishlist.next(w);
      this.updateOrAddWishlistInDb(w);
    }
  }

  public async getWishlist(): Promise<Wishlist> {
    const url = `${this.API_URLS.WISHLIST.GET}`;

    try {
      const wishlistR = await lastValueFrom(await this.http.get(url));
      const wishlist = new Wishlist(wishlistR);
      this.$wishlist.next(wishlist);
      return wishlist;
    } catch (error) {
      return null;
    }
  }

  private async updateOrAddWishlistInDb(wishlist: Wishlist): Promise<void> {
    const url = `${this.API_URLS.WISHLIST.ADD}`;

    try {
      const result = await lastValueFrom(await this.http.post(url, wishlist));
      return;
    } catch (error) {
      return;
    }
  }

  private async deleteWishlistInDb(wishlist: Wishlist): Promise<void> {
    const url = `${this.API_URLS.WISHLIST.DELETE}`;

    try {
      const result = await lastValueFrom(await this.http.post(url, wishlist));
      return;
    } catch (error) {
      return;
    }
  }
}
