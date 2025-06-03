import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SweetDatePipe } from './sweet-date.pipe';


@NgModule({
  declarations: [SweetDatePipe],
  imports: [
    CommonModule,
  ],
  exports:[SweetDatePipe]
})
export class SweetDateModule { }
