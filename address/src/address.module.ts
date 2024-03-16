import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryInstructionFormComponent } from './components/delivery-instruction-form/delivery-instruction-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UtilsModule } from '@annuadvent/ngx-core/utils';

@NgModule({
  declarations: [DeliveryInstructionFormComponent],
  imports: [CommonModule, ReactiveFormsModule, UtilsModule],
  exports: [DeliveryInstructionFormComponent],
})
export class AddressModule {}
