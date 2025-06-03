import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseListComponent } from './base-list.component';
import { DynamicPaginatorModule } from '../dynamic-paginator/dynamic-paginator.module';
import { SearchTableModule } from '../search-table/search-table.module';



@NgModule({
  declarations: [
    BaseListComponent
  ],
  imports: [
    CommonModule,
    DynamicPaginatorModule,
    SearchTableModule
  ],
  exports:[
    BaseListComponent
  ]
})
export class BaseListModule { }
