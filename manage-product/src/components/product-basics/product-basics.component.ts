import { Component } from '@angular/core';
import { ManageProductService } from '../../services/manage-product.service';
import { basicsParams } from '../../constants/basics-params.constant';
import { Product } from '@annuadvent/ngx-core/helpers-ecommerce';

@Component({
  selector: 'anu-product-basics',
  templateUrl: './product-basics.component.html',
  styleUrls: ['./product-basics.component.scss']
})
export class ProductBasicsComponent {
  basicsParams = { ...basicsParams };

  constructor(public mpS: ManageProductService) {
    this.mpS.saveBasics = this.mpS.saveBasics.bind(this.mpS);
  }

  public onSave(product: Product): void {
    this.mpS.saveBasics(product);
  }
}
