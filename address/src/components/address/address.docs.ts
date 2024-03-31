export const SAMPLE_ADDRESS = {
  id: '123456789',
  uid: 'sunil-user12345677',
  addressType: 'Business',
  firstName: 'Sunil',
  lastName: 'Kumar',
  company: 'Morgan Stanley',
  addressLine1: '1002, Tower 2, Unitech Horizon',
  addressLine2: 'Sec PI 2, Greater Noida',
  landmark: 'Pari Chowk',
  city: 'CENTRAL DELHI',
  state: 'DELHI',
  pincode: '110002',
  countryCode: 'IN',
  phoneNumber: '9910129602',
  deliveryInstruction: {
    offDays: ['Saturday', 'Sunday'],
    instructions:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took.'
  },
  createdTime: '',
  updatedTime: ''
};

export const AddressComponent: any = {
  projectionContent: '',
  inputPropsValues: {
    value: SAMPLE_ADDRESS
  }
};
