import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicPaginatorComponent } from './dynamic-paginator.component';



@NgModule({
  declarations: [
    DynamicPaginatorComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DynamicPaginatorComponent
  ]
})
export class DynamicPaginatorModule { }
