import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderStatusTranslate',
  standalone: true

})
export class StatusTranslatePipe implements PipeTransform {

  private readonly statusMap: Record<string, string> = {
    'wc-cancelled': 'Cancelado',
    'wc-completed': 'Concluído',
    'wc-failed': 'Falhou',
    'wc-processing': 'Processando',
    'wc-refunded': 'Reembolsado'
  };

  transform(value: string): string {
    return this.statusMap[value] || value;
  }
}