import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalVideoInputComponent } from './external-video-input.component';
import { ExternalVideoPreviewModule } from '../external-video-preview/external-video-preview.module';



@NgModule({
  declarations: [
    ExternalVideoInputComponent
  ],
  imports: [
    CommonModule,
    ExternalVideoPreviewModule
  ],
  exports:[
    ExternalVideoInputComponent
  ]
})
export class ExternalVideoInputModule { }
