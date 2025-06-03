import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseListScrollableComponent } from './base-list-scrollable.component';
import { SearchTableModule } from '../search-table/search-table.module';



@NgModule({
  declarations: [
    BaseListScrollableComponent,

  ],
  imports: [
    CommonModule,
    SearchTableModule
  ],
  exports: [
    BaseListScrollableComponent
  ]
})
export class BaseListScrollableModule { }
