import { Component } from '@angular/core';
import { Offer, Product } from '@annuadvent/ngx-core/helpers-ecommerce';
import { FormConfigGroup } from '@annuadvent/ngx-core/helpers-forms';
import { ManageProductService } from '../../services/manage-product.service';
import { offerParam } from '../../constants/offer-param.constant';

@Component({
  selector: 'anu-product-offers',
  templateUrl: './product-offers.component.html',
  styleUrls: ['./product-offers.component.scss']
})
export class ProductOffersComponent {
  offersParams: FormConfigGroup = null;
  offer: Offer = null;

  constructor(public mpS: ManageProductService) {
    this.mpS.saveOffer = this.mpS.saveOffer.bind(this.mpS);

    this.mpS.product.subscribe((p) => {
      let pParams: FormConfigGroup = null;

      if (p && p.sizes?.length) {
        pParams = {};
        p.sizes.forEach((size) => {
          pParams[size] = {
            ...offerParam,
            label: `Discount on Size - ${size}:`,
            placeholder: `% of price`
          };
        });
      }

      this.offersParams = pParams;
      this.offer = p?.offer ? { ...p.offer } : null;
    });
  }

  public onSave(offer: Offer): void {
    console.log(offer);
    this.mpS.saveOffer(new Product({ offer }));
  }
}
