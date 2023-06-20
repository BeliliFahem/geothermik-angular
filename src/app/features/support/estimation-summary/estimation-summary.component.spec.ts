import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimationSummaryComponent } from './estimation-summary.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

describe('EstimationSummaryComponent', () => {
  let component: EstimationSummaryComponent;
  let fixture: ComponentFixture<EstimationSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstimationSummaryComponent],
      imports: [MatProgressSpinnerModule],
    });
    fixture = TestBed.createComponent(EstimationSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
