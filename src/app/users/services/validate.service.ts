import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  isValidaField( form: FormGroup, field: string ): boolean | null {

    return form.controls[field].errors
      && form.controls[field].touched

  }

  getFieldError( form: FormGroup, field: string ): string | null {

    if ( !form.controls[field] ) return null;

    const errors = form.controls[field].errors || {};


    for ( const key of Object.keys(errors) ) {
      switch( key ) {
        case 'required':
          return 'This field is required';

        case 'minlength':
          return `min ${ errors['minlength'].requiredLength } characters`;

        case 'pattern':

          if (errors['pattern'].requiredPattern == '^[0-9]{0,99}$')
            return 'This field required numbers'

          if ( errors['pattern'].requiredPattern == '^[0-9]{10}$' )
            return 'This field required a numbre phone with 10 digits'

          return 'It expected a email format: example@gmail.com'

        case 'min':
          return `This field required a number greater than ${ errors['min'].min }`

      }
    }

    return null;

  }
}
