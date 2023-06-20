/* eslint-disable @typescript-eslint/unbound-method */
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  HouseholdIncomeAmount,
  SupportEstimationRequestDto,
} from 'generated-sources/geothermik-api-client';

@Component({
  selector: 'app-project-info-form',
  templateUrl: './project-info-form.component.html',
  styleUrls: ['./project-info-form.component.scss'],
})
export class ProjectInfoFormComponent {
  @Output() formValidated = new EventEmitter<
    Partial<SupportEstimationRequestDto>
  >();

  formGroup = this.formBuilder.group({
    isOwner: this.formBuilder.control<boolean>(true, Validators.required),
    householdPersonCount: this.formBuilder.control<number>(0, [
      Validators.required,
      Validators.min(1),
    ]),
    householdIncomes: this.formBuilder.group({
      value: this.formBuilder.control<HouseholdIncomeAmount>({ value: 0 }, [
        Validators.required,
        Validators.min(10000),
        Validators.max(100000),
      ]),
    }),
    surface: this.formBuilder.control<number>(0, [
      Validators.required,
      Validators.min(1),
    ]),
  });

  constructor(private readonly formBuilder: FormBuilder) {}

  onSubmit(): void {
    if (this.formGroup.valid) {
      this.formValidated.emit(
        this.formGroup.value as Partial<SupportEstimationRequestDto>
      );
    }
  }
}
