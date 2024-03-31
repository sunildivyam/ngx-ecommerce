import { Component, Input } from '@angular/core';
import { Address, CountriesEnum } from '@annuadvent/ngx-core/helpers-ecommerce';
/**
 * Address component shows the address in label kind of format.
 */
@Component({
  selector: 'anu-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent {
  /**
   * Value of type Address, that can be displayed in label kind of format.
   */
  @Input() value: Address;

  /**
   * Value of type Address, that can be displayed in label kind of format.
   */
  @Input() isSingleLiner: boolean = false;

  countriesEnum = CountriesEnum;
}
