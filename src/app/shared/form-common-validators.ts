/* eslint-disable @typescript-eslint/unbound-method */

import { ValidatorFn, Validators } from '@angular/forms';

export function alphabeticValidators(
  minLength = 3,
  maxLength = 10
): ValidatorFn[] {
  return [
    Validators.required,
    Validators.minLength(minLength),
    Validators.maxLength(maxLength),
    Validators.pattern('^[a-zA-ZÀ-ÿs]+$'),
  ];
}
