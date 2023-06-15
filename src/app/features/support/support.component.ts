/* eslint-disable @typescript-eslint/unbound-method */
// TODO fix the eslint-disable comment above
import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import {
  Civility,
  GeothermikApiService,
  SupportEstimationRequestDto,
} from 'generated-sources/geothermik-api-client';
import { FormGroupOf } from 'src/app/shared/form-group-of';

type PersonalInfo = Partial<SupportEstimationRequestDto>;

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss'],
})
export class SupportComponent {
  personalInfoFormGroup: FormGroup<FormGroupOf<PersonalInfo>>;
  projectInfoFormGroup: FormGroup;

  private readonly alphabeticValitarors = [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(10),
    Validators.pattern('^[a-zA-ZÀ-ÿs]+$'),
  ];

  constructor(
    private readonly geothermikApiService: GeothermikApiService,
    private readonly formBuilder: FormBuilder
  ) {
    // TODO try to use the formGroup from PersonalInfoFormComponent
    this.personalInfoFormGroup = this.formBuilder.group<
      FormGroupOf<PersonalInfo>
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

    this.projectInfoFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

  onNextStepClicked(): void {
    if (this.personalInfoFormGroup.valid) {
      // TODO fill the SupportEstimationRequestDto
      // const supportEstimationRequest: SupportEstimationRequestDto = this
      //   .personalInfoFormGroup.value as SupportEstimationRequestDto;
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
