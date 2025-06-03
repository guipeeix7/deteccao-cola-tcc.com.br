import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrucanteStringPipe } from './trucante-string.pipe';

@NgModule({
  declarations:
  [
    TrucanteStringPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TrucanteStringPipe
  ]
})
export class TrucanteStringPipeModule { }
