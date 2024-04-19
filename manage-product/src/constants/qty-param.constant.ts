import { FormConfigParameter } from '@annuadvent/ngx-core/helpers-forms';

export const qtyParam: FormConfigParameter = {
  type: 'number',
  controlType: 'number',
  value: '',
  label: 'Qty of Size: ',
  placeholder: 'Qty of Size: ',
  helpText: '(0 - 9999)',
  syncValidators: [
    { name: 'required' },
    { name: 'numericValidator' },
    { name: 'min', params: [0] },
    { name: 'max', params: [9999] }
  ],
  asyncValidators: [],
  list: [],
  disabled: false
};
