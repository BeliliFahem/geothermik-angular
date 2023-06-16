/* eslint-disable @typescript-eslint/unbound-method */
// TODO fix the eslint-disable comment above
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  Civility,
  SupportEstimationRequestDto,
} from 'generated-sources/geothermik-api-client';
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

  formGroup: PersonalInfoFormGroup;
  civilityOptions = Civility;

  private readonly alphabeticValitarors = [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(10),
    Validators.pattern('^[a-zA-ZÀ-ÿs]+$'),
  ];

  constructor(private readonly formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group<
      FormGroupOf<Partial<SupportEstimationRequestDto>>
    >({
      civility: this.formBuilder.control<Civility>(
        Civility.M,
        Validators.required
      ),
      lastName: this.formBuilder.control<string>('', this.alphabeticValitarors),
      firstName: this.formBuilder.control<string>(
        '',
        this.alphabeticValitarors
      ),
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

  onSubmit(): void {
    if (this.formGroup.valid) {
      this.formValidated.emit(
        this.formGroup.value as Partial<SupportEstimationRequestDto>
      );
    }
  }
}
