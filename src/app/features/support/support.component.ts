/* eslint-disable @typescript-eslint/unbound-method */
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { Component, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

import {
  Civility,
  GeothermikApiService,
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

  private supportEstimationRequestDto = {} as SupportEstimationRequestDto;

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

    this.stepper?.next();
  }

  onSelectionChange(selection: StepperSelectionEvent): void {
    if (selection.selectedIndex === 0) {
      this.setStepValidationState(this.personalInfoStepControl, false);
    } else if (selection.selectedIndex === 1) {
      this.setStepValidationState(this.projectInfoStepControl, false);
    }
  }

  private setStepValidationState(control: FormControl, valid: boolean): void {
    if (valid) {
      control.setErrors(null);
    } else {
      control.setErrors({ invalid: true });
    }
  }

  private sendSupportEstimationRequest(): void {
    const supportEstimationRequest: SupportEstimationRequestDto = {
      civility: Civility.M,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@mail.com',
      phoneNumber: '0123456789',
      isOwner: true,
      householdPersonCount: 2,
      householdIncomes: {
        value: 10000,
      },
      surface: 100,
    };

    this.geothermikApiService
      .estimateSupport(supportEstimationRequest)
      .subscribe({
        next: (response) => {
          // eslint-disable-next-line no-console
          console.log(
            'AppComponent > sendSupportEstimationRequest > response',
            response
          );
        },
        error: (error) => {
          // eslint-disable-next-line no-console
          console.log(
            'AppComponent > sendSupportEstimationRequest > error',
            error
          );
        },
      });
  }
}
