import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalVideoPreviewComponent } from './external-video-preview.component';
import { SafePipeModule } from '../safe-pipe/safe-pipe.module';



@NgModule({
  declarations: [
    ExternalVideoPreviewComponent,
  ],
  imports: [
    CommonModule,
    SafePipeModule
  ],
  exports:[
    ExternalVideoPreviewComponent,
  ]
})
export class ExternalVideoPreviewModule { }
