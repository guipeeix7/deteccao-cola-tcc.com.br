import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPreviewComponent } from './video-preview.component';



@NgModule({
  declarations: [
    VideoPreviewComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    VideoPreviewComponent
  ]
})
export class VideoPreviewModule { }
