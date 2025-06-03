import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdfViewerModule } from 'ng2-pdf-viewer'; // <- import PdfViewerModule
import { PdfPreviewComponent } from './pdf-preview.component';
import { SafePipeModule } from '../safe-pipe/safe-pipe.module';


@NgModule({
  declarations: [
    PdfPreviewComponent
  ],
  imports: [
    CommonModule,
    PdfViewerModule,
    SafePipeModule
  ],
  exports:[
    PdfPreviewComponent
  ]
})
export class PdfPreviewModule { }
