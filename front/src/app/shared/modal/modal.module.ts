import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { TrucanteStringPipeModule } from '../truncateStringPipe/trucante-string.module';



@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    TrucanteStringPipeModule
  ],
  exports:[
    ModalComponent
  ]
})
export class ModalModule { }
