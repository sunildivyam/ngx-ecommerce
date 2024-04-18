import { Inject, Injectable } from '@angular/core';
import { AppError } from '@annuadvent/ngx-core/app-error';
import { Product } from '@annuadvent/ngx-core/helpers-ecommerce';
import { BehaviorSubject, Observable, lastValueFrom } from 'rxjs';
import { MANAGE_PRODUCT_API_URLS_PROVIDER } from '../constants/manage-product.constant';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ManageProductService {
  private $product = new BehaviorSubject<Product>(null);
  private $error = new BehaviorSubject<AppError>(null);
  private $loading = new BehaviorSubject<boolean>(false);

  constructor(
    @Inject(MANAGE_PRODUCT_API_URLS_PROVIDER) private apiUrls: any,
    private http: HttpClient
  ) {}

  public get product(): Observable<Product> {
    return this.$product.asObservable();
  }

  public set product(v: Product) {
    this.$product.next(v);
  }

  public get error(): Observable<AppError> {
    return this.$error.asObservable();
  }

  public get loading(): Observable<boolean> {
    return this.$loading.asObservable();
  }

  public get isNewProduct(): boolean {
    return !this.$product.value?.id;
  }

  private generateProductId(): string {
    return Math.floor(new Date().valueOf() * Math.random()).toString();
  }

  private async checkApiUrls(): Promise<void> {
    if (!this.apiUrls) {
      throw new Error(
        `No apiUrls are provided. Provide MANAGE_PRODUCT_API_URLS_PROVIDER constant in the ManageProductModule's providers`
      );
    }
  }

  public async saveBasics(product: Product): Promise<void> {
    this.$error.next(null);
    this.$loading.next(true);

    const { id, title, description, brand } = product;
    const p = this.isNewProduct
      ? { ...product, id: this.generateProductId() }
      : { ...this.$product.value, id, title, description, brand };

    const url = this.isNewProduct
      ? this.apiUrls.ADD
      : `${this.apiUrls.UPDATE}/${p.id}`;

    try {
      await this.checkApiUrls();

      const result = await lastValueFrom(await this.http.post(url, p));

      this.$product.next(new Product(result));
      this.$loading.next(false);
      return;
    } catch (error) {
      this.$error.next(new AppError(error));
      this.$loading.next(false);
      return;
    }
  }
}
