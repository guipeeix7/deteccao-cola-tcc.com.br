import { Component, HostListener, Input } from '@angular/core';
import {  NG_VALUE_ACCESSOR } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-video-input',
  templateUrl: './video-input.component.html',
  styleUrls: ['./video-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: VideoInputComponent,
      multi: true
    }
  ]
})
export class VideoInputComponent {
  constructor(  ) {
  }
  file:File;
  @Input() preview:string|null = '';
  onTouch: any = () => {}
  @Input() imgSrc:any
  @Input() progress:number = 0
  onChange:any;

  writeValue(value: any): void { }
  registerOnChange(fn: any): void {this.onChange = fn;}
  registerOnTouched(fn: any): void {  }
  setDisabledState?(isDisabled: boolean): void {  }

  @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {
    this.file = event && event.item(0);
    this.preview = ''

    if (this.file) {
      if(event[0].type == "video/mp4" ||
        event[0].type == "video/webm"  ||
        event[0].type == "video/x-m4v"  ||
        event[0].type == "video/mpeg" ||
        event[0].type == "video/x-msvideo"||
        event[0].type == "video/x-matroska"
      ){
        const reader = new FileReader();
        reader.readAsDataURL(this.file);

        reader.onload = () => {
          this.preview = reader.result as string;
        };
      }
      else{
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Por favor faça o upload de um Video nos formatos (mp4, webm, m4v, mpeg, avi)',
          showConfirmButton: false,
          timer: 2000
        })
        this.file = null
        event = null;
      }
    }
    this.onChange(this.file);
    this.onTouch();
  }
}
