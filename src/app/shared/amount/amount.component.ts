import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-amount',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './amount.component.html',
  styleUrls: ['./amount.component.scss'],
})
export class AmountComponent {
  @Input() value?: number;
}
