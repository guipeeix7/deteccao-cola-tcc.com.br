import { Directive, Injectable, Input } from '@angular/core';
import { AbstractControl, AsyncValidator, AsyncValidatorFn, NG_ASYNC_VALIDATORS, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { BaseService } from './base.service';
import { basePlacements } from '@popperjs/core';
import { Observable, catchError, map, of } from 'rxjs';

export class CustomAsyncValidatorss{
  static uniqueNameValidator(baseService: BaseService , fieldName, urlFragment ): AsyncValidatorFn {
    return (control:AbstractControl<any, any>):
      Observable<ValidationErrors | null> => {
        const name = control.value;
        return baseService.uniqueNameValidator(fieldName, control.value, urlFragment).pipe(
          map((response) => {
            return response.data.length === 0  ?  null : { notUnique: name }
          })
        );
      }
  }
}
