import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Civility } from 'generated-sources/geothermik-api-client';

@Component({
  selector: 'app-personal-info-form',
  templateUrl: './personal-info-form.component.html',
  styleUrls: ['./personal-info-form.component.scss'],
})
export class PersonalInfoFormComponent {
  @Input() formGroup?: FormGroup;
  civilityOptions = Civility;
}
