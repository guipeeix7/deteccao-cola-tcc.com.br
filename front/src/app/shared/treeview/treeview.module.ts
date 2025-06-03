import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeviewExpandOnlyComponent } from './treeview-expand-only/treeview-expand-only.component';
import { TreeviewSelectableComponent } from './treeview-selectable/treeview-selectable.component';



@NgModule({
  declarations: [
    TreeviewExpandOnlyComponent,
    TreeviewSelectableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TreeviewModule { }
