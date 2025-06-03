import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCheckBoxComponent } from './custom-check-box.component';



@NgModule({
  declarations: [
    CustomCheckBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CustomCheckBoxComponent
  ]
})
export class CustomCheckBoxModule { }
