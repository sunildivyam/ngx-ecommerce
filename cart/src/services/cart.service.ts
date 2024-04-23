import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import {
  Cart,
  CartProducts,
  InCartProduct,
  Product,
  ProductQueryService
} from '@annuadvent/ngx-core/helpers-ecommerce';
import { FireAuthService } from '@annuadvent/ngx-tools/fire-auth';
import { BehaviorSubject, Observable, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private $cart = new BehaviorSubject<Cart>(null);
  private $cartProducts = new BehaviorSubject<CartProducts>({});

  public get cart(): Observable<Cart> {
    return this.$cart.asObservable();
  }

  public get cartProducts(): Observable<CartProducts> {
    return this.$cartProducts.asObservable();
  }

  constructor(
    private authService: FireAuthService,
    private http: HttpClient,
    private pqS: ProductQueryService,
    @Inject('API_URLS') private API_URLS: any
  ) {
    // Get the Cart from localstorage if exists or from database
    if (typeof localStorage !== 'undefined') {
      const cartStr = localStorage.getItem('cart');
      if (cartStr) {
        const cart: Cart = JSON.parse(cartStr);
        this.$cart.next({ ...cart });
      } else {
        this.getCartFromDb()
          .then((cart) => {
            this.$cart.next(cart);
          })
          .catch((err) => {
            this.$cart.next(null);
          });
      }
    }

    // Subscribe to cart, and fetch cart products
    this.cart.subscribe((cart) => {
      const pIds = cart?.products?.map((p) => p.id) || [];
      if (pIds.length) {
        this.pqS
          .getProductsByIds(pIds)
          .then((ps) => {
            const cPs = {};
            ps.forEach((p) => (cPs[p.id] = p));
            this.$cartProducts.next(cPs);
          })
          .catch((err) => this.$cartProducts.next({}));
      } else {
        this.$cartProducts.next({});
      }
    });
  }

  private updateCart(cart: Cart): void {
    cart.updateTime = new Date().toDateString();

    // Emit cart value
    this.$cart.next({ ...cart });

    // Update local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update database siliently
    this.updateOrAddCartInDb(cart);
  }

  private async updateOrAddCartInDb(cart: Cart): Promise<void> {
    const url = `${this.API_URLS.CART.ADD}`;

    try {
      const result = await lastValueFrom(await this.http.post(url, cart));
      return;
    } catch (error) {
      return;
    }
  }

  private async deleteCartInDb(cart: Cart): Promise<void> {
    const url = `${this.API_URLS.CART.DELETE}`;

    try {
      const result = await lastValueFrom(await this.http.post(url, cart));
      return;
    } catch (error) {
      return;
    }
  }

  private async getCartFromDb(): Promise<Cart> {
    const url = `${this.API_URLS.CART.GET}`;

    try {
      const cartR = await lastValueFrom(await this.http.get(url));
      const cart = new Cart(cartR);
      return cart;
    } catch (error) {
      return null;
    }
  }

  public add(product: Product, size: string, qty: number): void {
    const id = this.authService.getCurrentUserId();

    let cart = this.$cart.value;
    // if new cart
    if (!cart || (cart && cart.id !== id)) {
      cart = new Cart({
        id,
        products: [],
        createTime: new Date().toDateString(),
        updateTime: new Date().toDateString()
      });
    }

    // check if product with same id and size already exist, then add qtys
    // if added qty is greater then max qty, then set to max qty
    const existP = cart.products.find(
      (p) => p.id === product.id && p.size === size
    );
    if (existP) {
      existP.qty =
        existP.qty + qty > product.qty[size]
          ? product.qty[size]
          : existP.qty + qty;
    } else {
      cart.products.push(
        new InCartProduct({
          id: product.id,
          size,
          qty
        } as InCartProduct)
      );
    }

    this.updateCart(cart);
  }

  public remove(product: Product, size: string): void {
    let cart = this.$cart.value;
    //  remove cart Product
    cart.products = cart.products.filter(
      (p) => !(p.id === product.id && p.size === size)
    );

    this.updateCart(cart);
  }

  public changeSize(
    oldSize: string,
    product: Product,
    size: string,
    qty: number
  ): void {
    let cart = this.$cart.value;

    //  remove cart Product
    cart.products = cart.products.map((p) => {
      if (p.id !== product.id && p.size !== oldSize) {
        p.size = size;
        p.qty = qty;
      }
      return p;
    });

    this.updateCart(cart);
  }

  public updateQty(product: Product, size: string, qty: number): void {
    let cart = this.$cart.value;

    //  remove cart Product
    cart.products = cart.products.map((p) => {
      if (p.id !== product.id && p.size !== size) {
        p.qty = qty;
      }
      return p;
    });

    this.updateCart(cart);
  }

  public clearCart(): void {
    const cart = this.$cart.value;
    if (!cart) return;

    this.$cart.next(null);

    // Clear localstorage
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('cart');
    }

    // Delete cart from db siliently
    this.deleteCartInDb(cart);
  }
}
