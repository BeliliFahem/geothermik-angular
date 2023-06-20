import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportComponent } from './support.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { PersonalInfoFormComponent } from './personal-info-form/personal-info-form.component';
import { ProjectInfoFormComponent } from './project-info-form/project-info-form.component';
import { EstimationSummaryComponent } from './estimation-summary/estimation-summary.component';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';
import { AmountComponent } from 'src/app/shared/amount/amount.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SupportComponent', () => {
  let component: SupportComponent;
  let fixture: ComponentFixture<SupportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SupportComponent,
        PersonalInfoFormComponent,
        ProjectInfoFormComponent,
        EstimationSummaryComponent,
      ],
      imports: [
        BrowserAnimationsModule,
        CommonModule,
        RouterModule,
        HttpClientModule,
        MatButtonModule,
        MatStepperModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        MatSlideToggleModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatListModule,
        MatIconModule,
        AmountComponent,
      ],
    });
    fixture = TestBed.createComponent(SupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// add usefull tests
