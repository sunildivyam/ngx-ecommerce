import { Inject, Injectable } from '@angular/core';
import { AppError } from '@annuadvent/ngx-core/app-error';
import { Product } from '@annuadvent/ngx-core/helpers-ecommerce';
import { BehaviorSubject, Observable, lastValueFrom } from 'rxjs';
import { MANAGE_PRODUCT_API_URLS_PROVIDER } from '../constants/manage-product.constant';
import { HttpClient } from '@angular/common/http';
import { Category } from '@annuadvent/ngx-core/helpers-categories';

@Injectable()
export class ManageProductService {
  private $product = new BehaviorSubject<Product>(null);
  private $error = new BehaviorSubject<AppError>(null);
  private $loading = new BehaviorSubject<boolean>(false);
  private $categories = new BehaviorSubject<Array<Category>>([]);

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

  public get categories(): Observable<Array<Category>> {
    return this.$categories.asObservable();
  }

  public set categories(v: Array<Category>) {
    this.$categories.next(v);
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
  private async updateProduct(p: Product): Promise<void> {
    this.$error.next(null);
    this.$loading.next(true);

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

  public async saveBasics(product: Product): Promise<void> {
    this.$error.next(null);
    this.$loading.next(true);

    const { id, title, description, brand } = product;
    const p: Product = this.isNewProduct
      ? new Product({ ...product, id: this.generateProductId() })
      : new Product({ ...this.$product.value, id, title, description, brand });

    return await this.updateProduct(p);
  }

  public async saveCategories(product: Product): Promise<void> {
    this.$error.next(null);
    this.$loading.next(true);

    const { categories } = product;
    const p: Product = this.isNewProduct
      ? new Product({ ...product, id: this.generateProductId() })
      : new Product({ ...this.$product.value, categories });

    return await this.updateProduct(p);
  }
}
