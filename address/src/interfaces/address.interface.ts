import { AddressTypesEnum } from '../enums/address-types.enums';
import { DeliveryInstruction } from './deliveryInstruction.interface';

export interface CustomerAddress {
  id?: string; // Auto generated Unique Id
  customerId: number; // Unique Id of Customer
  addressType: AddressTypesEnum;
  firstName: string;
  lastName: string;
  company?: string; // Company Name if Address belong to a business
  addressLine1: string;
  addressLine2?: string;
  landmark?: string;
  city: string; // City from a cities list
  state: string; // State name from StateS list or table
  postalCode: string; // Postal code from list or Table
  countryCode: string; // Country Code from Countries List (id) / Table
  phoneNumber?: string; // phone number of reciver at address and NOTE: not neccssary of Customer itself.
  deliveryInstruction?: DeliveryInstruction;
}
