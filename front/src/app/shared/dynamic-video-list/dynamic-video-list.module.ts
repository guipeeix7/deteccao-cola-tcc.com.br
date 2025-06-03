import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchTableComponent } from '../search-table/search-table.component';
import { DynamicPaginatorComponent } from '../dynamic-paginator/dynamic-paginator.component';
import {  DynamicVideoListComponent } from './dynamic-video-list.component';
import { RouterModule } from '@angular/router';
import {  TrucanteStringPipe } from '../truncateStringPipe/trucante-string.pipe';
import { NgSelectModule } from '@ng-select/ng-select';
import { DyamicSelectModule } from 'src/app/shared/dyamic-select/dyamic-select.module';
import { SearchTableModule } from '../search-table/search-table.module';
import { PaginatorModule } from '../paginator/paginator.module';
import { DynamicPaginatorModule } from '../dynamic-paginator/dynamic-paginator.module';

@NgModule({
  declarations: [
    // SearchTableComponent,
    // DynamicPaginatorComponent,
    // DynamicTableComponent,
    DynamicVideoListComponent,
    // TrucanteStringPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    DyamicSelectModule,
    SearchTableModule,
    DynamicPaginatorModule
  ],
  exports:[
    DynamicVideoListComponent
    // SearchTableModule,
    // DynamicPaginator,
    // DynamicTableComponent,
  ]
})
export class DynamicVideoListModule { }
