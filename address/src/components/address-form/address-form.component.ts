import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';

import { Address } from '@annuadvent/ngx-core/helpers-ecommerce';
import {
  FormConfigGroup,
  FormControlValue
} from '@annuadvent/ngx-core/helpers-forms';
import { addressParams } from '../../constants/address-params.constant';

/**
 * Address Form component. Add/edit/delete an Address
 */
@Component({
  selector: 'anu-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit, OnChanges {
  /**
   * Address Value for Address form
   */
  @Input() value: Address;

  /**
   * Shows Loader
   */
  @Input() loading: boolean = false;

  /**
   * Shows readonly address, and editable delivery instructions
   */
  @Input() instructionsOnly: boolean = false;

  /**
   * True if it is the default address
   */
  @Input() isDefault: boolean = false;

  /**
   * Save Button Label
   */
  @Input() saveBtnLabel: string = 'Save';

  /**
   * Cancel Button Label
   */
  @Input() cancelBtnLabel: string = 'Cancel';

  /**
   * Url to validate pincode and fetch City and its state.
   * Usually an API url.
   */
  @Input() pincodeUrl: string = '';

  /**
   * Emit address value from form, when blur happens from any of the form fields.
   */
  @Output() changed = new EventEmitter<Address>();

  /**
   * Emit if address is changed to default or otherwise.
   */

  @Output() defaultChanged = new EventEmitter<boolean>();

  /**
   * Emit address value from form, when submit button is clicked.
   */
  @Output() submitClicked = new EventEmitter<Address>();

  /**
   * Emit, when cancel button is clicked.
   */
  @Output() cancelClicked = new EventEmitter<void>();

  addressParams: FormConfigGroup = addressParams;

  constructor() {}

  ngOnInit(): void {
    this.setPincodeUrl();
  }

  ngOnChanges(changes: SimpleChanges): void {
    (changes.pincodeUrl || changes.value) && this.setPincodeUrl();
  }

  private setPincodeUrl(): void {
    this.addressParams['pincode'].asyncValidators.find(
      (avd) => avd.name === 'PincodeValidatorService'
    ).url = this.pincodeUrl;
  }

  public onSubmit(value: Address): void {
    this.submitClicked.emit(value);
  }

  public onChange(value: Address): void {
    this.changed.emit(value);
  }

  public onControlValueChange(value: FormControlValue): void {
    if (value.key === 'isDefault') {
      this.defaultChanged.emit(value?.value);
    }
  }

  public onCancel(event: any): void {
    this.cancelClicked.emit();
  }
}
