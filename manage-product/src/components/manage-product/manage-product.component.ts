import { Component } from '@angular/core';
import { ManageProductService } from '../../services/manage-product.service';
import { flowTabs } from '../../constants/manage-product.constant';
import { Tab } from '@annuadvent/ngx-common-ui/tabs';

@Component({
  selector: 'anu-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.scss']
})
export class ManageProductComponent {
  flowTabs = [...flowTabs];
  activeTab: Tab = flowTabs[0];

  constructor(public mpS: ManageProductService) {}

  public onTabChange(tab: Tab): void {
    this.activeTab = tab;
  }
}
