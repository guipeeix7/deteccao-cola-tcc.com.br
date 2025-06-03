import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageInputComponent } from './image-input.component';
import { ImagePreviewComponent } from '../image-preview/image-preview.component';
import { ProgressBarModule } from '../progress-bar/progress-bar.module';



@NgModule({
  declarations: [
    ImageInputComponent,
    ImagePreviewComponent
  ],
  imports: [
    CommonModule,
    ProgressBarModule
  ],
  exports:[
    ImageInputComponent,
    ImagePreviewComponent
  ]
})
export class ImageInputModule { }
