import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment'

@Pipe({
  name: 'apiUrl'
})
export class ApiUrlPipe implements PipeTransform {
  API_URL = environment.API_URL
  transform(value: string): string {
    return this.API_URL+value
  }

}
