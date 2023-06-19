import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectInfoFormComponent } from './project-info-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

describe('ProjectInfoFormComponent', () => {
  let component: ProjectInfoFormComponent;
  let fixture: ComponentFixture<ProjectInfoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectInfoFormComponent],
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSlideToggleModule,
      ],
    });
    fixture = TestBed.createComponent(ProjectInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// TODO: add useful tests
