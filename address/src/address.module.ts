import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryInstructionFormComponent } from './components/delivery-instruction-form/delivery-instruction-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UtilsModule } from '@annuadvent/ngx-core/utils';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { HttpClientModule } from '@angular/common/http';
import { AddressFormService } from './services/address-form.service';
import { ReactiveFormModule } from '@annuadvent/ngx-common-ui/reactive-form';
import { SpinnerModule } from '@annuadvent/ngx-common-ui/spinner';
import { SingleSelectBoxModule } from '@annuadvent/ngx-common-ui/single-select-box';
import { CollapsibleModule } from '@annuadvent/ngx-common-ui/collapsible';
import { AddressComponent } from './components/address/address.component';
import { AddressListComponent } from './components/address-list/address-list.component';
import { CardModule } from '@annuadvent/ngx-common-ui/card';
import { PincodeValidatorService } from '@annuadvent/ngx-core/helpers-forms';

@NgModule({
  declarations: [
    DeliveryInstructionFormComponent,
    AddressFormComponent,
    AddressComponent,
    AddressListComponent
  ],
  providers: [AddressFormService, PincodeValidatorService],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    UtilsModule,
    ReactiveFormModule,
    SpinnerModule,
    SingleSelectBoxModule,
    CollapsibleModule,
    CardModule
  ],
  exports: [
    DeliveryInstructionFormComponent,
    AddressFormComponent,
    AddressComponent,
    AddressListComponent
  ]
})
export class AddressModule {}
