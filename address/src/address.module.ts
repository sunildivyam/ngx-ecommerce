import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryInstructionFormComponent } from './components/delivery-instruction-form/delivery-instruction-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UtilsModule } from '@annuadvent/ngx-core/utils';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { HttpClientModule } from '@angular/common/http';
import { AddressFormService } from './services/address-form.service';
import { ReactiveFormModule } from '@annuadvent/ngx-common-ui/reactive-form';
import { PincodeValidatorService } from './services/pincode-validator.service';
import { SpinnerModule } from '@annuadvent/ngx-common-ui/spinner';
import { SingleSelectBoxModule } from '@annuadvent/ngx-common-ui/single-select-box';
import { CollapsibleModule } from '@annuadvent/ngx-common-ui/collapsible';

@NgModule({
  declarations: [DeliveryInstructionFormComponent, AddressFormComponent],
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
  ],
  exports: [DeliveryInstructionFormComponent, AddressFormComponent],
})
export class AddressModule {}
