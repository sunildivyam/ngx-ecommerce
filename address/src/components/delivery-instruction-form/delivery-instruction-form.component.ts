import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  AbstractControl,
} from '@angular/forms';
import { v4 as uuidv4 } from 'uuid'; // Import UUID generation library
import { WeekDaysEnum } from '../../enums/week-days.enum';
import { DeliveryInstruction } from '../../interfaces/deliveryInstruction.interface';
import { EnumToArrayPipe } from '@annuadvent/ngx-core/utils';

@Component({
  selector: 'anu-delivery-instruction-form',
  templateUrl: './delivery-instruction-form.component.html', // Assuming template file exists
  styleUrls: ['./delivery-instruction-form.component.scss'],
})
export class DeliveryInstructionFormComponent implements OnInit {
  @Input() deliveryInstruction: DeliveryInstruction; // Existing instruction to pre-populate
  @Output() instructionChange = new EventEmitter<DeliveryInstruction>();

  deliveryInstructionForm: FormGroup;
  weekDays = WeekDaysEnum; // Expose weekdays in the component
  WeekDaysEnum = WeekDaysEnum;

  constructor(private fb: FormBuilder, private enumToArray: EnumToArrayPipe) {}

  ngOnInit() {
    this.deliveryInstructionForm = this.fb.group({
      id: [null, []], // Auto-generated ID, no validation
      offDays: this.fb.array([], [this.atLeastOneCheckboxSelected]),
      instructionText: [''], // No validation required
    });

    // Add checkboxes for each weekday dynamically
    const wdArray = this.enumToArray.transform(WeekDaysEnum) || [];

    wdArray.forEach((day) => {
      const control = this.fb.control(false);
      (this.deliveryInstructionForm.get('offDays') as FormArray).push(control);
    });

    // Pre-populate form if an existing instruction is provided
    if (this.deliveryInstruction) {
      this.deliveryInstructionForm.patchValue(this.deliveryInstruction);
    }
  }

  onSubmit() {
    if (this.deliveryInstructionForm.valid) {
      const instructionData = this.deliveryInstructionForm
        .value as DeliveryInstruction;
      this.instructionChange.emit(instructionData); // Emit the complete instruction object
    }
  }

  cancel() {
    // Handle form cancellation logic
  }

  // Custom validator to ensure at least one checkbox is selected
  atLeastOneCheckboxSelected(control: FormArray) {
    const selected = control.controls.filter((ctrl) => ctrl.value);
    return selected.length === 0 ? { atLeastOneSelected: true } : null;
  }
}
