import { Injectable } from '@angular/core';
import { Cart } from '@annuadvent/ngx-core/helpers-ecommerce';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private $cart = new BehaviorSubject<Cart>(null);

  public get cart(): Observable<Cart> {
    return this.$cart.asObservable();
  }

  constructor() {}

  public add(productId: string, size: string, qty: number): void {}
}
