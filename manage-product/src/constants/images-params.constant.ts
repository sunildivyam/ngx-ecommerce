import { FormConfigGroup } from '@annuadvent/ngx-core/helpers-forms';

export const imagesParams: FormConfigGroup = {
  productImages: {
    type: 'Array',
    controlType: 'image',
    value: null,
    label: 'Upload Product Images',
    placeholder: 'Upload Product Images',
    helpText: '',
    syncValidators: [],
    asyncValidators: [
      {
        name: 'ImageValidatorService',
        imageDimsName: 'productImageDimensions'
      }
    ],
    list: [],
    actionBtn: '',
    disabled: false,
    hidden: false
  }
};
