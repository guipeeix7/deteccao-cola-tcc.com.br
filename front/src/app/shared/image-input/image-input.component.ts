import { Component, HostListener, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-image-input',
  templateUrl: './image-input.component.html',
  styleUrls: ['./image-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ImageInputComponent,
      multi: true
    }
  ]
})
export class ImageInputComponent implements ControlValueAccessor{
  constructor(  ) {
  }
  file:File;
  @Input() preview:any;
  onTouch: any = () => {}
  @Input() imgSrc:any
  @Input() progress:number = 0
  onChange:any;

  writeValue(value: any): void {  }
  registerOnChange(fn: any): void {this.onChange = fn;}
  registerOnTouched(fn: any): void {  }
  setDisabledState?(isDisabled: boolean): void {  }

  @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {
    this.file = event && event.item(0);
    this.preview = ''

    if (this.file) {
      const reader = new FileReader();
      reader.readAsDataURL(this.file);

      reader.onload = () => {
        this.preview = reader.result as string;
      };
    }
    this.onChange(this.file);
    this.onTouch();
  }
}
