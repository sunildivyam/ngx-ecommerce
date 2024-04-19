import { FormConfigGroup } from '@annuadvent/ngx-core/helpers-forms';

export const sizesParams: FormConfigGroup = {
  sizes: {
    type: 'Array',
    controlType: 'checkbox',
    value: '',
    label: 'Product Sizes',
    placeholder: 'Product Sizes',
    helpText: '',
    syncValidators: [{ name: 'required' }],
    asyncValidators: [],
    list: [],
    disabled: false
  }
};
