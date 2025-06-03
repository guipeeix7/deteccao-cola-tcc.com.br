import { Pipe, PipeTransform } from '@angular/core';
import { permissionTemplateGuard } from '../../guards/permissions.guard'
@Pipe({ name: 'guard' })
export class GuardPipe implements PipeTransform {
  constructor() {}
  transform(name) {
    if(name != ''){
      return permissionTemplateGuard(name);
    }
    else{
      return true;
    }
  }
}
