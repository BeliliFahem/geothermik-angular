import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Civility,
  GeothermikApiService,
  SupportEstimationRequestDto,
} from 'generated-sources/geothermik-api-client';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss'],
})
export class SupportComponent {
  constructor(private readonly geothermikApiService: GeothermikApiService) {}

  sendSupportEstimationRequest(): void {
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
