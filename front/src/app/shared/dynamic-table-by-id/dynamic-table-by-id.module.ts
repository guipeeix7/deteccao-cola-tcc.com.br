import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicTableByIdComponent } from './dynamic-table-by-id.component';
import { RouterModule } from '@angular/router';
import { DyamicSelectModule } from '../dyamic-select/dyamic-select.module';
import { DynamicPaginatorModule } from '../dynamic-paginator/dynamic-paginator.module';
import { GuardPipeModule } from '../guard-pipe/guard-pipe.module';
import { SearchTableModule } from '../search-table/search-table.module';
import { TrucanteStringPipeModule } from '../truncateStringPipe/trucante-string.module';



@NgModule({
  declarations: [
    DynamicTableByIdComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DyamicSelectModule,
    DynamicPaginatorModule,
    SearchTableModule,
    TrucanteStringPipeModule,
    GuardPipeModule,
  ],
  exports:[
    DynamicTableByIdComponent
  ]
})
export class DynamicTableByIdModule { }
