import { Component } from '@angular/core';
import { ManageProductService } from '../../services/manage-product.service';

@Component({
  selector: 'anu-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.scss'],
  providers: [ManageProductService]
})
export class ManageProductComponent {
  constructor(public mpS: ManageProductService) {}
}
