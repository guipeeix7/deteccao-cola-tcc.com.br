import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DyamicSelectComponent } from './dyamic-select.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DyamicSelectComponent,

  ],
  imports: [
    CommonModule,
    NgSelectModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    DyamicSelectComponent
  ]
})
export class DyamicSelectModule { }
