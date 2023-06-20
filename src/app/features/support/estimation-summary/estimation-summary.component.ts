import { Component, Input } from '@angular/core';
import {
  SupportEstimationDto,
  SupportEstimationRequestDto,
} from 'generated-sources/geothermik-api-client';

@Component({
  selector: 'app-estimation-summary',
  templateUrl: './estimation-summary.component.html',
  styleUrls: ['./estimation-summary.component.scss'],
})
export class EstimationSummaryComponent {
  @Input() supportEstimationDto?: SupportEstimationDto;
  @Input() supportEstimationRequestDto?: SupportEstimationRequestDto;

  getThanksMessage(): string {
    if (this.supportEstimationRequestDto) {
      return `Merci ${this.supportEstimationRequestDto.civility} ${this.supportEstimationRequestDto.lastName} ${this.supportEstimationRequestDto.firstName}`;
    }

    return 'Merci pour votre demande';
  }
}
