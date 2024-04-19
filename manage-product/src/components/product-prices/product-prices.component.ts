import { Component } from '@angular/core';
import { ManageProductService } from '../../services/manage-product.service';
import {
  GlobalConfigParamsEnum,
  GlobalConfigService
} from '@annuadvent/ngx-core/global-config';
import { Price, Product } from '@annuadvent/ngx-core/helpers-ecommerce';
import { priceParam } from '../../constants/price-param.constant';
import { FormConfigGroup } from '@annuadvent/ngx-core/helpers-forms';

@Component({
  selector: 'anu-product-prices',
  templateUrl: './product-prices.component.html',
  styleUrls: ['./product-prices.component.scss']
})
export class ProductPricesComponent {
  pricesParams: FormConfigGroup = null;
  price: Price = null;

  constructor(
    public mpS: ManageProductService,
    private gcService: GlobalConfigService
  ) {
    this.mpS.savePrice = this.mpS.savePrice.bind(this.mpS);

    this.mpS.product.subscribe((p) => {
      let pParams: FormConfigGroup = null;

      if (p && p.sizes?.length) {
        pParams = {};
        p.sizes.forEach((size) => {
          pParams[size] = {
            ...priceParam,
            label: `Price of Size - ${size}:`,
            placeholder: `0`
          };
        });
      }

      this.pricesParams = pParams;
      this.price = p?.price ? { ...p.price } : null;
    });
  }

  public onSave(price: Price): void {
    console.log(price);
    this.mpS.savePrice(new Product({ price }));
  }
}
