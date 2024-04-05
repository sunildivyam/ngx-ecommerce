import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';
import { AddressTypesEnum } from '@annuadvent/ngx-core/helpers-ecommerce';

export {
  trimSpacesValidator,
  indiaMobileValidator
} from '@annuadvent/ngx-core/helpers-forms';

export const companyValidator = (
  control: AbstractControl
): ValidationErrors | null => {
  const addressType = control.get('addressType');
  const company = control.get('company');

  if (addressType.value === AddressTypesEnum.Business && !company.value) {
    company.setErrors({ required: true });
    company.markAsDirty();
    company.markAllAsTouched();
  }

  return null;
};
