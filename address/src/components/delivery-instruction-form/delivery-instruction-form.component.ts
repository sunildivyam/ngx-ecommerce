import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import {
  ADDRESS_FIELD_LENGTH,
  DeliveryInstruction,
  WeekDaysEnum,
} from '@annuadvent/ngx-core/helpers-ecommerce';
import { EnumToArrayPipe } from '@annuadvent/ngx-core/utils';
import { trimSpacesValidator } from '../../constants/address.validators';

@Component({
  selector: 'anu-delivery-instruction-form',
  templateUrl: './delivery-instruction-form.component.html', // Assuming template file exists
  styleUrls: ['./delivery-instruction-form.component.scss'],
})
export class DeliveryInstructionFormComponent implements OnInit, OnChanges {
  @Input() value: DeliveryInstruction; // Existing instruction to pre-populate
  @Output() changed = new EventEmitter<DeliveryInstruction>();
  @Output() statusChanged = new EventEmitter<ValidationErrors>();

  fm: FormGroup;
  WeekDaysEnum = WeekDaysEnum;

  constructor(private fb: FormBuilder, private enumToArray: EnumToArrayPipe) {
    this.initForm();

    this.fm.valueChanges.subscribe((value) => {
      this.changed.emit(value);
    });

    this.fm.statusChanges.subscribe((state) => {
      let errors = null;

      Object.keys(this.fm.controls).forEach((key) => {
        const controlErrors = this.fm.controls[key].errors;
        if (controlErrors) {
          errors = { ...(errors || {}), controlErrors };
        }
      });

      this.statusChanged.emit(errors);
    });
  }

  public get offDays(): AbstractControl {
    return this.fm.get('offDays');
  }

  public get instructions(): AbstractControl {
    return this.fm.get('instructions');
  }

  ngOnInit() {
    this.initForm(this.value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.initForm(this.value);
  }

  private initForm(value: DeliveryInstruction = null): void {
    value = value || new DeliveryInstruction();
    if (this.fm) {
      this.fm.patchValue(value, { emitEvent: false });
      return;
    }

    this.fm = this.fb.group(
      {
        offDays: [value.offDays, []],
        instructions: [
          value.instructions,
          [Validators.maxLength(ADDRESS_FIELD_LENGTH * 3), trimSpacesValidator],
        ],
      },
      {
        validators: [],
        updateOn: 'blur',
      }
    );
  }

  public onOffDaysClick(event: any): void {
    const value = event.target.value;
    const checked = event.target.checked;
    const offDays = this.offDays.value;

    if (!checked) {
      // To Add to Off days
      if (offDays.length < 6) {
        // Not all 7 days be off days for delivery.
        if (!offDays.includes(value)) {
          offDays.push(value);
        }
        this.offDays.setValue(offDays);
      } else {
        // At least one delivery day must be selected
        event.target.checked = true;

        // Also set error for offdays
        this.offDays.setErrors({
          offDays: { message: 'Choose atleast one or more days for delivery.' },
        });
      }
    } else {
      // To Remove off days
      this.offDays.setValue(offDays.filter((day) => day !== value));
    }

    this.offDays.markAsDirty();
    this.offDays.markAsTouched();
  }
}
