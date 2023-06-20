import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { SupportRoutingModule } from './support-routing.module';
import { SupportComponent } from './support.component';

import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PersonalInfoFormComponent } from './personal-info-form/personal-info-form.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { ProjectInfoFormComponent } from './project-info-form/project-info-form.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { EstimationSummaryComponent } from './estimation-summary/estimation-summary.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { AmountComponent } from 'src/app/shared/amount/amount.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    SupportComponent,
    PersonalInfoFormComponent,
    ProjectInfoFormComponent,
    EstimationSummaryComponent,
  ],
  imports: [
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
    SupportRoutingModule,
  ],
})
export class SupportModule {}
