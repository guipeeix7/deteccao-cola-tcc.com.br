import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slugify',
  standalone: true
})
export class SlugifyPipe implements PipeTransform {
  transform(value: string): string {
    return value
      .normalize('NFD')                      // remove acentos
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/\s+/g, '-')                 // espaços → hífens
      .replace(/[^a-z0-9\-]/g, '')          // remove símbolos
      .replace(/\-+/g, '-')                 // múltiplos hífens → 1
      .replace(/^\-+|\-+$/g, '');           // remove hífens extremos
  }
}