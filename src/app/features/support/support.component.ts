/* eslint-disable @typescript-eslint/unbound-method */
// TODO fix the eslint-disable comment above
import { Component, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
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

  projectInfoFormGroup: FormGroup;

  constructor(
    private readonly geothermikApiService: GeothermikApiService,
    private readonly formBuilder: FormBuilder
  ) {
    this.projectInfoFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

  onPersonalInfoValidated(value: Partial<SupportEstimationRequestDto>): void {
    this.stepper?.next();
    // TODO fill a SupportEstimationRequestDto
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
