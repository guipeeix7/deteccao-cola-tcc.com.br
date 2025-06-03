import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFileInputComponent } from './dynamic-file-input.component';
import { PdfPreviewModule } from '../pdf-preview/pdf-preview.module';



@NgModule({
  declarations: [
    DynamicFileInputComponent
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    DynamicFileInputComponent
  ]
})
export class DynamicFileInputModule { }
