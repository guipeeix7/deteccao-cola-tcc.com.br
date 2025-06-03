import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomSelectableListComponent } from './custom-selectable-list.component';
import { SelectableItemComponent } from './selectable-item/selectable-item.component';



@NgModule({
  declarations: [
    CustomSelectableListComponent,
    SelectableItemComponent,
    SelectableItemComponent,

  ],
  imports: [
    CommonModule
  ],
  exports:[
    CustomSelectableListComponent,
    SelectableItemComponent
  ]
})
export class CustomSelectableListModule { }
