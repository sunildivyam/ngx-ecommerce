import { Component } from '@angular/core';
import { ManageProductService } from '../../services/manage-product.service';
import {
  GlobalConfigParamsEnum,
  GlobalConfigService
} from '@annuadvent/ngx-core/global-config';
import { Category } from '@annuadvent/ngx-core/helpers-categories';
import { Product } from '@annuadvent/ngx-core/helpers-ecommerce';
import { AppError } from '@annuadvent/ngx-core/app-error';

@Component({
  selector: 'anu-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.scss']
})
export class ProductCategoriesComponent {
  maxLevels: number = 0;
  selectedCatIds: Array<string> = [];
  product: Product = null;
  error: AppError = null;

  constructor(
    public mpS: ManageProductService,
    private gcService: GlobalConfigService
  ) {
    this.gcService.config.subscribe(() => {
      this.maxLevels = this.gcService.getValue(
        GlobalConfigParamsEnum.categoryMaxLevels
      );

      this.init();
    });

    this.mpS.product.subscribe((p) => {
      this.product = p;
      this.init();
    });
  }

  private init(): void {
    this.selectedCatIds = [];
    for (let i = 0; i < this.maxLevels; i++) {
      this.selectedCatIds.push(this.product?.categories[i] || '');
    }
  }

  private resetNextLevels(level): void {
    const sIds = [...this.selectedCatIds];

    for (let i = level; i < this.maxLevels; i++) {
      sIds[i] = '';
    }
    this.selectedCatIds = [...sIds];
  }

  private isValid(): boolean {
    return (
      this.selectedCatIds.length == this.maxLevels &&
      !this.selectedCatIds.find((id) => !id)
    );
  }
  public onCatSelect(catId: string, level: number): void {
    this.error = null;
    this.resetNextLevels(level);
  }

  public onSave(event: any): void {
    this.error = null;

    if (this.isValid()) {
      this.mpS.saveCategories(new Product({ categories: this.selectedCatIds }));
    } else {
      this.error = new AppError(
        'You must choose all levels of categories for your product.'
      );
    }
  }
}
