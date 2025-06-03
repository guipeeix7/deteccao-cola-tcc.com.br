import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfInputComponent } from './pdf-input.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PdfPreviewModule } from '../pdf-preview/pdf-preview.module';



@NgModule({
  declarations: [
    PdfInputComponent
  ],
  imports: [
    CommonModule,
    PdfPreviewModule,
    PdfViewerModule
  ],
  exports:[
    PdfInputComponent
  ]
})
export class PdfInputModule { }
