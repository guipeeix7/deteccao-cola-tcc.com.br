import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalPdfInputComponent } from './external-pdf-input.component';
import { PdfPreviewModule } from '../pdf-preview/pdf-preview.module';



@NgModule({
  declarations: [
    ExternalPdfInputComponent,
  ],
  imports: [
    CommonModule,
    PdfPreviewModule
  ],
  exports:[
    ExternalPdfInputComponent
  ]
})
export class ExternalPdfInputModule { }
