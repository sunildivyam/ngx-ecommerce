import { FormConfigGroup } from '@annuadvent/ngx-core/helpers-forms';

export const dispatchParams: FormConfigGroup = {
  minDispatchTime: {
    type: 'number',
    controlType: 'number',
    value: '',
    label: 'Dispatch Time - as early as',
    placeholder: 'Dispatch Time - as early as',
    helpText: '(1 - 15 days)',
    syncValidators: [
      { name: 'required' },
      { name: 'trimSpacesValidator' },
      { name: 'min', params: [1] },
      { name: 'max', params: [15] }
    ],
    asyncValidators: [],
    list: [],
    disabled: false
  },
  maxDispatchTime: {
    type: 'number',
    controlType: 'number',
    value: '',
    label: 'Dispatch Time - not later than',
    placeholder: 'Dispatch Time - not later than',
    helpText: '(1 - 15 days)',
    syncValidators: [
      { name: 'required' },
      { name: 'trimSpacesValidator' },
      { name: 'min', params: [1] },
      { name: 'max', params: [15] }
    ],
    asyncValidators: [],
    list: [],
    disabled: false
  }
};
