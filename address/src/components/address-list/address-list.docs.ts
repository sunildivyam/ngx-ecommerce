import { SAMPLE_ADDRESS } from '../address/address.docs';

export const AddressListComponent: any = {
  projectionContent: '',
  inputPropsValues: {
    value: [
      { ...SAMPLE_ADDRESS },
      {
        ...SAMPLE_ADDRESS,
        id: '98765432',
        addressType: 'Home',
        firstName: 'Divyam',
        lastName: 'Yadav',
      },
    ],
  },
};
