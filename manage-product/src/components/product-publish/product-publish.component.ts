import { Component } from '@angular/core';
import { ManageProductService } from '../../services/manage-product.service';

@Component({
  selector: 'anu-product-publish',
  templateUrl: './product-publish.component.html',
  styleUrls: ['./product-publish.component.scss']
})
export class ProductPublishComponent {
  constructor(public mpS: ManageProductService) {}
  public onPublish(event: any) {
    this.mpS.goLive();
  }
}
