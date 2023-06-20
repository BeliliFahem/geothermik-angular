/* eslint-disable @typescript-eslint/unbound-method */
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { Component, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { captureException } from '@sentry/angular-ivy';

import {
  GeothermikApiService,
  SupportEstimationDto,
  SupportEstimationRequestDto,
} from 'generated-sources/geothermik-api-client';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss'],
})
export class SupportComponent {
  @ViewChild('stepper') stepper?: MatStepper;

  personalInfoStepControl = new FormControl('', Validators.required);
  projectInfoStepControl = new FormControl('', Validators.required);

  supportEstimationDto?: SupportEstimationDto = {} as SupportEstimationDto;

  supportEstimationRequestDto = {} as SupportEstimationRequestDto;

  estimationErrorOccurred = false;

  constructor(private readonly geothermikApiService: GeothermikApiService) {}

  onPersonalInfoValidated(value: Partial<SupportEstimationRequestDto>): void {
    this.supportEstimationRequestDto = {
      ...this.supportEstimationRequestDto,
      ...value,
    } as SupportEstimationRequestDto;

    this.setStepValidationState(this.personalInfoStepControl, true);

    this.stepper?.next();
  }

  onProjectInfoValidated(value: Partial<SupportEstimationRequestDto>): void {
    this.supportEstimationRequestDto = {
      ...this.supportEstimationRequestDto,
      ...value,
    } as SupportEstimationRequestDto;

    this.setStepValidationState(this.projectInfoStepControl, true);

    this.sendSupportEstimationRequest();

    this.stepper?.next();
  }

  onSelectionChange(selection: StepperSelectionEvent): void {
    if (selection.selectedIndex === 0) {
      this.setStepValidationState(this.personalInfoStepControl, false);
    } else if (selection.selectedIndex === 1) {
      this.setStepValidationState(this.projectInfoStepControl, false);
    }
  }

  reset(): void {
    this.supportEstimationRequestDto = {} as SupportEstimationRequestDto;
    this.supportEstimationDto = undefined;
    this.estimationErrorOccurred = false;
    this.stepper?.reset();
  }

  private setStepValidationState(control: FormControl, valid: boolean): void {
    if (valid) {
      control.setErrors(null);
    } else {
      control.setErrors({ invalid: true });
    }
  }

  private sendSupportEstimationRequest(): void {
    this.geothermikApiService
      .estimateSupport(this.supportEstimationRequestDto)
      .subscribe({
        next: (response) => {
          this.supportEstimationDto = response;
          this.estimationErrorOccurred = false;
        },
        error: (error) => {
          this.estimationErrorOccurred = true;
          captureException(error);
        },
      });
  }
}
