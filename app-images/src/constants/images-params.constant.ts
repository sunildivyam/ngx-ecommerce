import { FormConfigGroup } from '@annuadvent/ngx-core/helpers-forms';

export const imagesParams: FormConfigGroup = {
  bannerImages: {
    type: 'Array',
    controlType: 'image',
    value: null,
    label: 'Upload Banner Images',
    placeholder: 'Upload Banner Images',
    helpText: '',
    syncValidators: [],
    asyncValidators: [
      {
        name: 'ImageValidatorService',
        imageDimsName: 'bannerImageDimensions'
      }
    ],
    list: [],
    actionBtn: '',
    disabled: false,
    hidden: false
  },
  otherImages: {
    type: 'Array',
    controlType: 'image',
    value: null,
    label: 'Upload Other App Images',
    placeholder: 'Upload Other App Images',
    helpText: '',
    syncValidators: [],
    asyncValidators: [],
    list: [],
    actionBtn: '',
    disabled: false,
    hidden: false
  }
};
