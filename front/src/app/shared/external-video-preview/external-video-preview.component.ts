import { Component, Input } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-external-video-preview',
  templateUrl: './external-video-preview.component.html',
  styleUrls: ['./external-video-preview.component.scss']
})
export class ExternalVideoPreviewComponent {
  constructor() {}
  @Input() url
}
