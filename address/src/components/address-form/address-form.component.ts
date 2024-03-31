import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import {
  ADDRESS_FIELD_LENGTH,
  Address,
  AddressTypesEnum,
  CountriesEnum,
  DeliveryInstruction,
} from '@annuadvent/ngx-core/helpers-ecommerce';
import {
  IndianStatesEnum,
  WeekDaysEnum,
} from '@annuadvent/ngx-core/helpers-ecommerce';
import { PincodeValidatorService } from '../../services/pincode-validator.service';
import { SpinnerMode } from '@annuadvent/ngx-common-ui/spinner';
import {
  companyValidator,
  mobilePhoneValidator,
  trimSpacesValidator,
} from '../../constants/address.validators';
import { EnumToArrayPipe } from '@annuadvent/ngx-core/utils';

/**
 * Address Form component. Add/edit/delete an Address
 */
@Component({
  selector: 'anu-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
})
export class AddressFormComponent implements OnInit, OnChanges {
  /**
   * Address Value for Address form
   */
  @Input() value: Address;

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

  fm: FormGroup = null;
  spinnerMode = SpinnerMode;
  submitTried = false;

  // List Varibales
  indianStatesEnum = IndianStatesEnum;
  countriesEnum = CountriesEnum;
  addressTypesEnum = AddressTypesEnum;
  addressTypeItems = [];
  addressTypeSelected = null;

  constructor(
    private fb: FormBuilder,
    private el: ElementRef,
    private enumToArrayPipe: EnumToArrayPipe,
    private pincodeValidatorService: PincodeValidatorService
  ) {
    this.initForm();
    this.fm.valueChanges.subscribe((value) => {
      const address: Address = { ...this.value, ...this.fm.getRawValue() };
      this.changed.emit(address);
    });
  }

  ngOnInit(): void {
    this.initForm(this.value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.initForm(this.value);
  }

  // Getters
  public get firstName(): AbstractControl {
    return this.fm.get('firstName');
  }

  public get lastName(): AbstractControl {
    return this.fm.get('lastName');
  }

  public get addressLine1(): AbstractControl {
    return this.fm.get('addressLine1');
  }

  public get addressLine2(): AbstractControl {
    return this.fm.get('addressLine2');
  }

  public get landmark(): AbstractControl {
    return this.fm.get('landmark');
  }

  public get pincode(): AbstractControl {
    return this.fm.get('pincode');
  }

  public get phoneNumber(): AbstractControl {
    return this.fm.get('phoneNumber');
  }

  public get addressType(): AbstractControl {
    return this.fm.get('addressType');
  }

  public get company(): AbstractControl {
    return this.fm.get('company');
  }

  public get deliveryInstruction(): AbstractControl {
    return this.fm.get('deliveryInstruction');
  }

  private initAddressType(): void {
    // Fill AddressType Items
    this.addressTypeItems = this.enumToArrayPipe
      .transform(AddressTypesEnum)
      .map((it) => ({
        key: it,
        value: it,
      }));
    // Set addressType selected Item
    this.addressTypeSelected = {
      key: this.addressType.value,
      value: this.addressType.value,
    };
  }

  private initForm(value: Address = null): void {
    value = value || new Address();
    if (this.fm) {
      this.fm.patchValue(value, { emitEvent: false });
      return;
    }

    this.fm = this.fb.group(
      {
        addressType: [
          value.addressType,
          [trimSpacesValidator, Validators.required],
        ],
        firstName: [
          value.firstName,
          [
            Validators.required,
            Validators.maxLength(ADDRESS_FIELD_LENGTH),
            trimSpacesValidator,
          ],
        ],
        lastName: [
          value.lastName,
          [trimSpacesValidator, Validators.maxLength(ADDRESS_FIELD_LENGTH)],
        ],
        company: [
          value.company,
          [trimSpacesValidator, Validators.maxLength(ADDRESS_FIELD_LENGTH)],
        ],
        addressLine1: [
          value.addressLine1,
          [
            Validators.required,
            Validators.maxLength(ADDRESS_FIELD_LENGTH),
            trimSpacesValidator,
          ],
        ],
        addressLine2: [
          value.addressLine2,
          [trimSpacesValidator, Validators.maxLength(ADDRESS_FIELD_LENGTH)],
        ],
        landmark: [
          value.landmark,
          [trimSpacesValidator, Validators.maxLength(ADDRESS_FIELD_LENGTH)],
        ],
        city: [
          { value: value.city, disabled: true },
          [Validators.required],
          [],
        ],
        state: [
          { value: value.state, disabled: true },
          [Validators.required],
          [],
        ],
        pincode: [
          value.pincode,
          [
            trimSpacesValidator,
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(6),
          ],
          [
            this.pincodeValidatorService.validate.bind(
              this.pincodeValidatorService
            ),
          ],
          {
            updateOn: 'blur',
          },
        ],
        countryCode: [
          { value: value.countryCode, disabled: true },
          [Validators.required],
          [],
        ],
        phoneNumber: [
          value.phoneNumber,
          [trimSpacesValidator, Validators.required, mobilePhoneValidator],
        ],
        deliveryInstruction: [value.deliveryInstruction, [Validators.required]],
      },
      {
        validators: [companyValidator],
        updateOn: 'blur',
      }
    );

    this.initAddressType();
  }

  private setDeliveryInstructionForAddressType(
    addressType: AddressTypesEnum
  ): void {
    let offDays = [];

    switch (addressType) {
      case AddressTypesEnum.Business:
        offDays = [WeekDaysEnum.Saturday, WeekDaysEnum.Sunday];
        break;
      case AddressTypesEnum.Apartment:
        offDays = [WeekDaysEnum.Sunday];
        break;
      case AddressTypesEnum.Other:
        offDays = [WeekDaysEnum.Saturday, WeekDaysEnum.Sunday];
        break;
      default:
        offDays = [];
    }

    this.deliveryInstruction.patchValue({
      ...this.deliveryInstruction.value,
      offDays,
    });
  }

  public onSubmit(event: any): void {
    // Show all invalid fields' errors.
    this.fm.markAllAsTouched();
    this.submitTried = true;

    if (this.fm.valid) {
      // Emit Submit
      const address: Address = { ...this.value, ...this.fm.getRawValue() };
      this.submitClicked.emit(address);
    } else {
      // Focus to the first errored field
      const erroredElements =
        this.el.nativeElement.querySelectorAll('form .ng-invalid');
      erroredElements &&
        erroredElements.length &&
        (erroredElements[0] as HTMLElement).focus();
    }
  }

  public onCancel(event: any): void {
    this.cancelClicked.emit();
  }

  public onAddressTypeChange(item: any): void {
    this.addressTypeSelected = item;
    this.addressType.setValue(item.value);

    // Chnage Off days for delivery accordingly
    this.setDeliveryInstructionForAddressType(item.value);
  }

  public onDeliveryInstructionChange(value: DeliveryInstruction): void {
    this.deliveryInstruction.setValue(value);
  }

  public onDeliveryInstructionStatusChange(error: ValidationErrors): void {
    this.deliveryInstruction.setErrors(error);
  }

  public onDefaultClick(event: any): void {
    const checked = event.target.checked;
    this.defaultChanged.emit(checked);
  }
}
