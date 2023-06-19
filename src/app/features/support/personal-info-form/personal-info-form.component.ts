/* eslint-disable @typescript-eslint/unbound-method */
// TODO fix the eslint-disable comment above
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  Civility,
  SupportEstimationRequestDto,
} from 'generated-sources/geothermik-api-client';
import { alphabeticValidators } from 'src/app/shared/form-common-validators';
import { FormGroupOf } from 'src/app/shared/form-group-of';

type PersonalInfoFormGroup = FormGroup<
  FormGroupOf<Partial<SupportEstimationRequestDto>>
>;

@Component({
  selector: 'app-personal-info-form',
  templateUrl: './personal-info-form.component.html',
  styleUrls: ['./personal-info-form.component.scss'],
})
export class PersonalInfoFormComponent {
  @Output() formValidated = new EventEmitter<
    Partial<SupportEstimationRequestDto>
  >();

  formGroup: PersonalInfoFormGroup = new FormGroup({});
  civilityOptions = Civility;

  constructor(private readonly formBuilder: FormBuilder) {
    this.initForm();
  }

  onSubmit(): void {
    if (this.formGroup.valid) {
      this.formValidated.emit(
        this.formGroup.value as Partial<SupportEstimationRequestDto>
      );
    }
  }

  private initForm(): void {
    this.formGroup = this.formBuilder.group<
      FormGroupOf<Partial<SupportEstimationRequestDto>>
    >({
      civility: this.formBuilder.control<Civility>(
        Civility.M,
        Validators.required
      ),
      lastName: this.formBuilder.control<string>('', alphabeticValidators()),
      firstName: this.formBuilder.control<string>('', alphabeticValidators()),
      email: this.formBuilder.control<string>('', [
        Validators.required,
        Validators.email,
      ]),
      phoneNumber: this.formBuilder.control<string>('', [
        Validators.required,
        Validators.pattern('^(06|07)\\d{8}$'),
      ]),
    });
  }
}
