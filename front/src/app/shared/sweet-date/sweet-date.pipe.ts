import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sweetDate'
})
export class SweetDatePipe implements PipeTransform {
  transform(inputDate: string): string {
    if (!inputDate) {
      return '';
    }

    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(inputDate);

    return date.toLocaleDateString('pt-BR', options);
  }
}
