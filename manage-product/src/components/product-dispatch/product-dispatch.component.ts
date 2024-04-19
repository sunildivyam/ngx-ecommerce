import { Component } from '@angular/core';
import { dispatchParams } from '../../constants/dispatch-params.constant';
import { ManageProductService } from '../../services/manage-product.service';
import { Product } from '@annuadvent/ngx-core/helpers-ecommerce';

@Component({
  selector: 'anu-product-dispatch',
  templateUrl: './product-dispatch.component.html',
  styleUrls: ['./product-dispatch.component.scss']
})
export class ProductDispatchComponent {
  dispatchParams = { ...dispatchParams };

  constructor(public mpS: ManageProductService) {
    this.mpS.saveDispatch = this.mpS.saveDispatch.bind(this.mpS);
  }

  public onSave(product: Product): void {
    this.mpS.saveDispatch(product);
  }
}
