import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'app-dynamic-file-input',
  templateUrl: './dynamic-file-input.component.html',
  styleUrls: ['./dynamic-file-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DynamicFileInputComponent),  // replace name as appropriate
      multi: true
    }
  ]
})

export class DynamicFileInputComponent implements ControlValueAccessor{
  writeValue(obj: any): void {  }
  registerOnChange(fn: any): void { this._onChange = fn }
  registerOnTouched(fn: any): void {  }
  setDisabledState?(isDisabled: boolean): void {  }
  _onChange(value){}

  file:File
  onFileChange(event){
    this.file = event.target.files[0];
  }

}
