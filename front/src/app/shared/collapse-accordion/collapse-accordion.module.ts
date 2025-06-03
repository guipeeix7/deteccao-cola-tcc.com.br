import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseAccordionComponent } from './collapse-accordion.component';
import { CollapseItemComponent } from './collapse-item/collapse-item.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CollapseAccordionComponent,
    CollapseItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    CollapseAccordionComponent,
    CollapseItemComponent
  ]
})
export class CollapseAccordionModule { }
