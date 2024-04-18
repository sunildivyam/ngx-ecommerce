import { FormConfigGroup } from '@annuadvent/ngx-core/helpers-forms';

export const basicsParams: FormConfigGroup = {
  id: {
    type: 'string',
    controlType: 'text',
    disabled: true,
    hidden: true
  },
  title: {
    type: 'string',
    controlType: 'text',
    value: '',
    label: 'Product title',
    placeholder: 'Product title',
    helpText: '',
    syncValidators: [
      { name: 'required' },
      { name: 'trimSpacesValidator' },
      { name: 'maxLength', params: [300] }
    ],
    asyncValidators: [],
    list: [],
    disabled: false
  },
  description: {
    type: 'string',
    controlType: 'textarea',
    value: '',
    label: 'Product description',
    placeholder: 'Product description',
    helpText: '',
    syncValidators: [
      { name: 'required' },
      { name: 'trimSpacesValidator' },
      { name: 'maxLength', params: [1000] }
    ],
    asyncValidators: [],
    list: [],
    disabled: false
  },
  brand: {
    type: 'string',
    controlType: 'text',
    value: '',
    label: 'Brand Name',
    placeholder: 'Brand Name',
    helpText: '',
    syncValidators: [
      { name: 'required' },
      { name: 'trimSpacesValidator' },
      { name: 'maxLength', params: [100] }
    ],
    asyncValidators: [],
    list: [],
    disabled: false
  }
};
