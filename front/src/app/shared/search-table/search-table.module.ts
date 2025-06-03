import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchTableComponent } from './search-table.component';



@NgModule({
  declarations: [
    SearchTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SearchTableComponent
  ]
})
export class SearchTableModule { }
