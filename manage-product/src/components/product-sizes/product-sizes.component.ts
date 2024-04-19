import { Component } from '@angular/core';
import { sizesParams } from '../../constants/sizes-params.constant';
import { ManageProductService } from '../../services/manage-product.service';
import { Product } from '@annuadvent/ngx-core/helpers-ecommerce';
import {
  GlobalConfigParamsEnum,
  GlobalConfigService
} from '@annuadvent/ngx-core/global-config';

@Component({
  selector: 'anu-product-sizes',
  templateUrl: './product-sizes.component.html',
  styleUrls: ['./product-sizes.component.scss']
})
export class ProductSizesComponent {
  sizesParams = { ...sizesParams };

  constructor(
    public mpS: ManageProductService,
    private gcService: GlobalConfigService
  ) {
    this.mpS.saveSizes = this.mpS.saveSizes.bind(this.mpS);

    this.gcService.config.subscribe(() => {
      const availableSizes = this.gcService.getValue(
        GlobalConfigParamsEnum.productSizes
      );
      this.sizesParams['sizes'].list = availableSizes
        .split(',')
        .map((s) => ({ key: s, value: s }));
    });
  }

  public onSave(product: Product): void {
    this.mpS.saveSizes(product);
  }
}
