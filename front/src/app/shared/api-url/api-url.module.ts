import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiUrlPipe } from './api-url.pipe';

@NgModule({
  declarations:
  [
    ApiUrlPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ApiUrlPipe
  ]
})
export class ApiUrlPipeModule { }
