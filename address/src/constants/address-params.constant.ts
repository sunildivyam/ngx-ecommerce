import {
  AddressTypesEnum,
  CountriesEnum,
  IndianStatesEnum,
  WeekDaysEnum
} from '@annuadvent/ngx-core/helpers-ecommerce';

export const addressParams = {
  id: {
    type: 'string',
    controlType: 'text',
    disabled: true,
    hidden: true
  },
  uid: {
    type: 'string',
    controlType: 'text',
    disabled: true,
    hidden: true
  },
  firstName: {
    type: 'string',
    controlType: 'text',
    value: '',
    label: 'First Name',
    placeholder: 'First Name',
    helpText: '',
    syncValidators: [
      { name: 'required' },
      { name: 'trimSpacesValidator' },
      { name: 'maxLength', params: [100] }
    ],
    asyncValidators: [],
    list: [],
    disabled: false
  },
  lastName: {
    type: 'string',
    controlType: 'text',
    value: '',
    label: 'Last Name',
    placeholder: 'Last Name',
    helpText: '(Optional)',
    syncValidators: [
      { name: 'trimSpacesValidator' },
      { name: 'maxLength', params: [100] }
    ],
    asyncValidators: [],
    list: [],
    disabled: false
  },
  addressLine1: {
    type: 'string',
    controlType: 'text',
    value: '',
    label: 'Street / locality / village',
    placeholder: 'Street address, P.O. box, company name, c/o',
    helpText: '',
    syncValidators: [
      { name: 'required' },
      { name: 'trimSpacesValidator' },
      { name: 'maxLength', params: [100] }
    ],
    asyncValidators: [],
    list: [],
    disabled: false
  },
  addressLine2: {
    type: 'string',
    controlType: 'text',
    value: '',
    label: 'Address Line 2',
    placeholder: 'Apartment, suite, unit, building, floor, etc.',
    helpText: '(optional)',
    syncValidators: [
      { name: 'trimSpacesValidator' },
      { name: 'maxLength', params: [100] }
    ],
    asyncValidators: [],
    list: [],
    disabled: false
  },
  landmark: {
    type: 'string',
    controlType: 'text',
    value: '',
    label: 'Landmark',
    placeholder: 'Nearest landmark',
    helpText: '(optional)',
    syncValidators: [
      { name: 'trimSpacesValidator' },
      { name: 'maxLength', params: [100] }
    ],
    asyncValidators: [],
    list: [],
    disabled: false
  },
  pincode: {
    type: 'string',
    controlType: 'text',
    value: '',
    label: 'Pincode',
    placeholder: 'Pincode',
    helpText: '(City & state will autofill, when you enter pincode)',
    syncValidators: [
      { name: 'required' },
      { name: 'trimSpacesValidator' },
      { name: 'minLength', params: [6] },
      { name: 'maxLength', params: [6] }
    ],
    asyncValidators: [{ name: 'PincodeValidatorService', url: '' }],
    list: [],
    disabled: false
  },
  city: {
    type: 'string',
    controlType: 'text',
    value: '',
    label: 'City',
    placeholder: 'City',
    helpText: '',
    syncValidators: [
      { name: 'required' },
      { name: 'trimSpacesValidator' },
      { name: 'maxLength', params: [100] }
    ],
    asyncValidators: [],
    list: [],
    disabled: true
  },
  state: {
    type: 'string',
    controlType: 'select',
    value: '',
    label: 'State',
    placeholder: 'State',
    helpText: '',
    syncValidators: [
      { name: 'required' },
      { name: 'trimSpacesValidator' },
      { name: 'maxLength', params: [100] }
    ],
    asyncValidators: [],
    list: Object.keys(IndianStatesEnum).map((key) => ({
      key,
      value: IndianStatesEnum[key]
    })),
    disabled: true
  },
  countryCode: {
    type: 'string',
    controlType: 'select',
    value: CountriesEnum.IN,
    label: 'Country',
    placeholder: 'Country',
    helpText: '',
    syncValidators: [
      { name: 'required' },
      { name: 'trimSpacesValidator' },
      { name: 'maxLength', params: [100] }
    ],
    asyncValidators: [],
    list: Object.keys(CountriesEnum).map((key) => ({
      key,
      value: CountriesEnum[key]
    })),
    disabled: true
  },
  phoneNumber: {
    type: 'string',
    controlType: 'text',
    value: '',
    label: 'Mobile phone',
    placeholder: 'Mobile number',
    helpText: '(do not prefix country code)',
    syncValidators: [
      { name: 'required' },
      { name: 'trimSpacesValidator' },
      { name: 'indiaMobileValidator' }
    ],
    asyncValidators: [],
    list: [],
    disabled: false
  },
  createTime: {
    type: 'string',
    controlType: 'text',
    disabled: true,
    hidden: true
  },
  updateTime: {
    type: 'string',
    controlType: 'text',
    disabled: true,
    hidden: true
  },

  company: {
    type: 'string',
    controlType: 'text',
    value: '',
    label: 'Company',
    placeholder: 'Company Name',
    helpText: "(Provide if it's a company address)",
    syncValidators: [
      { name: 'trimSpacesValidator' },
      { name: 'maxLength', params: [100] }
    ],
    asyncValidators: [],
    list: [],
    disabled: false
  },

  isDefault: {
    type: 'boolean',
    controlType: 'checkbox',
    value: true,
    label: 'Make addreess default',
    placeholder: '',
    helpText: '',
    syncValidators: [],
    asyncValidators: [],
    list: [],
    disabled: false
  },
  addressType: {
    type: 'string',
    controlType: 'radio',
    value: AddressTypesEnum.Home,
    label: 'Please select an address type',
    placeholder: '',
    helpText: '',
    syncValidators: [{ name: 'required' }],
    asyncValidators: [],
    list: Object.keys(AddressTypesEnum).map((key) => ({
      key,
      value: AddressTypesEnum[key]
    })),
    disabled: false
  },
  deliveryInstruction: {
    controlType: 'group',
    label: 'Add delivery instructions',
    params: {
      offDays: {
        type: 'Array',
        controlType: 'checkbox',
        value: [WeekDaysEnum.Tuesday, WeekDaysEnum.Friday],
        label: 'Please select delivery days',
        placeholder: '',
        helpText: '',
        syncValidators: [],
        asyncValidators: [],
        list: Object.keys(WeekDaysEnum).map((key) => ({
          key,
          value: WeekDaysEnum[key]
        })),
        disabled: false
      },
      instructions: {
        type: 'string',
        controlType: 'textarea',
        value: '',
        label: 'Instructions',
        placeholder: 'Instructions',
        helpText: '(optional)',
        syncValidators: [
          { name: 'trimSpacesValidator' },
          { name: 'maxLength', params: [300] }
        ],
        asyncValidators: [],
        list: [],
        disabled: false
      }
    }
  }
};
