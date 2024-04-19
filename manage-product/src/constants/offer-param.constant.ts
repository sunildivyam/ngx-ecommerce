import { FormConfigParameter } from '@annuadvent/ngx-core/helpers-forms';

export const offerParam: FormConfigParameter = {
  type: 'number',
  controlType: 'number',
  value: '',
  label: 'Discount Size: ',
  placeholder: 'Discount Size: ',
  helpText: '(0 - 90 discount(%))',
  syncValidators: [
    { name: 'required' },
    { name: 'numericValidator' },
    { name: 'min', params: [0] },
    { name: 'max', params: [90] }
  ],
  asyncValidators: [],
  list: [],
  disabled: false
};
