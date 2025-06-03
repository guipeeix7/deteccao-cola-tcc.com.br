import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchTableComponent } from '../search-table/search-table.component';
import { DynamicPaginatorComponent } from '../dynamic-paginator/dynamic-paginator.component';
import { DynamicTableComponent } from './dynamic-table.component';
import { RouterModule } from '@angular/router';
import { TrucanteStringPipeModule } from '../truncateStringPipe/trucante-string.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { DyamicSelectModule } from 'src/app/shared/dyamic-select/dyamic-select.module';
import { DynamicPaginatorModule } from '../dynamic-paginator/dynamic-paginator.module';
import { SearchTableModule } from '../search-table/search-table.module';
import { GuardPipeModule } from '../guard-pipe/guard-pipe.module';
import { LoaderModule } from '../loader/loader.module';
import { SafePipeModule } from '../safe-pipe/safe-pipe.module';
import { StripHtmlModule } from '../strip-html/strip-html.module';

@NgModule({
  declarations: [
    // SearchTableComponent,
    // DynamicPaginatorComponent,
    DynamicTableComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    DyamicSelectModule,
    DynamicPaginatorModule,
    SearchTableModule,
    TrucanteStringPipeModule,
    GuardPipeModule,
    LoaderModule,
    SafePipeModule,
    StripHtmlModule
  ],
  exports:[
    // SearchTableComponent,
    // DynamicPaginatorComponent,
    DynamicTableComponent,

  ]
})
export class DynamicTableModule { }
