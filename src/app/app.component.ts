import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Civility, GeothermikApiService, SupportEstimationDto, SupportEstimationRequestDto } from 'generated-sources/geothermik-api-client';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'geothermik-front-angular';
  apiResponse?: SupportEstimationDto;

  constructor(private geothermikApiService: GeothermikApiService) { }

  ngOnInit(): void {
    console.log('AppComponent ngOnInit');
  }

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

    this.geothermikApiService.estimateSupport(supportEstimationRequest).subscribe({
      next: (response) => {
        console.log('AppComponent > sendSupportEstimationRequest > response', response);
        this.apiResponse = response;
      },
      error: (error) => {
        console.log('AppComponent > sendSupportEstimationRequest > error', error);
      }
    });
  }
}
