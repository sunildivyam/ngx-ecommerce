import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';
import { AddressTypesEnum } from '@annuadvent/ngx-core/helpers-ecommerce';

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

export const trimSpacesValidator = (
  control: AbstractControl
): ValidationErrors | null => {
  if (
    control.value &&
    ((control.value as string).startsWith(' ') ||
      (control.value as string).endsWith(' '))
  ) {
    control.setValue((control.value as string).trim());
    if (!control.value && control.hasValidator(Validators.required)) {
      return {
        required: true,
      };
    }
    return null;
  }

  return null;
};

export const mobilePhoneValidator = (
  control: AbstractControl
): ValidationErrors | null => {
  // Regular expression for Indian mobile numbers (10 digits starting with 6, 7, 8 or 9)
  const regex = /^\d{10}$/;
  const phoneNumber = control.value || '';

  if (!phoneNumber.trim()) {
    return {
      required: true,
    };
  }

  // Remove any non-numeric characters
  const sanitizedNumber = phoneNumber.replace(/\D/g, '');

  // Check if the sanitized number matches the regex pattern
  if (regex.test(sanitizedNumber)) {
    return null;
  } else {
    return {
      phoneNumber: {
        message:
          'Invalid Mobile phone number format. A 10 digit number with no spaces and special characters is alowed.',
      },
    };
  }
};
