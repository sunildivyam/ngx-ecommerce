import { Component } from '@angular/core';
import { FormConfigGroup } from '@annuadvent/ngx-core/helpers-forms';
import { ManageProductService } from '../../services/manage-product.service';
import { Product, Qty } from '@annuadvent/ngx-core/helpers-ecommerce';
import { qtyParam } from '../../constants/qty-param.constant';

@Component({
  selector: 'anu-product-quantities',
  templateUrl: './product-quantities.component.html',
  styleUrls: ['./product-quantities.component.scss']
})
export class ProductQuantitiesComponent {
  qtysParams: FormConfigGroup = null;
  qty: Qty = null;

  constructor(public mpS: ManageProductService) {
    this.mpS.saveQty = this.mpS.saveQty.bind(this.mpS);

    this.mpS.product.subscribe((p) => {
      let pParams: FormConfigGroup = null;

      if (p && p.sizes?.length) {
        pParams = {};
        p.sizes.forEach((size) => {
          pParams[size] = {
            ...qtyParam,
            label: `Stock of Size - ${size}:`,
            placeholder: `${size} stock qty`
          };
        });
      }

      this.qtysParams = pParams;
      this.qty = { ...p.qty };
    });
  }

  public onSave(qty: Qty): void {
    console.log(qty);
    this.mpS.saveQty(new Product({ qty }));
  }
}
