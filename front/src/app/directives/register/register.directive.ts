import { Directive } from '@angular/core';
import {ValidatorFn, ValidationErrors ,AbstractControl } from '@angular/forms';



function  requiredValidator(control: AbstractControl): ValidationErrors|null {
  return isEmptyInputValue(control.value) ? {'required': true} : null;
}
function isEmptyInputValue(value: any): boolean {
  /**
   * Check if the object is a string or array before evaluating the length attribute.
   * This avoids falsely rejecting objects that contain a custom length attribute.
   * For example, the object {id: 1, length: 0, width: 0} should not be returned as empty.
   */
  return value == null ||
      ((typeof value === 'string' || Array.isArray(value)) && value.length === 0);
}

@Directive({
  selector: '[appRegister]'
})
export class RegisterDirective {

  constructor() { }

  static validatePassword(control: AbstractControl): ValidationErrors | null  {
    const password = control.get('password');
    const password_confirmation = control.get('password_confirmation');

    return (password && password_confirmation && password.value !== password_confirmation.value) ? { notSamePassword: true } : null;
  };


  static required(control: AbstractControl): ValidationErrors|null {
    return requiredValidator(control);
  }

  // static validatePassword(password : string, password_confirmation : string):  any | null  {
  //   // const password = control.get('password');
  //   // const password_confirmation = control.get('password_confirmation');
  //   // console.log(control)
  //   return password && password_confirmation && password === password_confirmation ? { notSamePassword: true } : null;
  // };
}
