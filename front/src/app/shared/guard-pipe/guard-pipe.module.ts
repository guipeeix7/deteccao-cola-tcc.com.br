import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuardPipe } from './guard-pipe';

@NgModule({
  declarations:
  [
    GuardPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GuardPipe
  ]
})
export class GuardPipeModule { }
