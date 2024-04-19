import { FormConfigParameter } from '@annuadvent/ngx-core/helpers-forms';

export const priceParam: FormConfigParameter = {
  type: 'number',
  controlType: 'number',
  value: '',
  label: 'Price of Size: ',
  placeholder: 'Price of Size: ',
  helpText: '(Rs. 1 - 1000000)',
  syncValidators: [
    { name: 'required' },
    { name: 'numericValidator' },
    { name: 'min', params: [1] },
    { name: 'max', params: [1000000] }
  ],
  asyncValidators: [],
  list: [],
  disabled: false
};
