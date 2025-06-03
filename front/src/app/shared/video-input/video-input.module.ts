import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoInputComponent } from './video-input.component';
import { ProgressBarModule } from '../progress-bar/progress-bar.module';
import { VideoPreviewModule } from '../video-preview/video-preview.module';


@NgModule({
  declarations: [
    VideoInputComponent,
  ],
  imports: [
    CommonModule,
    VideoPreviewModule,
    ProgressBarModule
  ],
  exports:[
    VideoInputComponent,
  ]
})
export class VideoInputModule { }
