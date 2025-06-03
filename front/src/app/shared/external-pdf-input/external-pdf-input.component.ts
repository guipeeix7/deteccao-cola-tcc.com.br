import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, ElementRef, EventEmitter, Renderer2, forwardRef} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-external-pdf-input',
  templateUrl: './external-pdf-input.component.html',
  styleUrls: ['./external-pdf-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ExternalPdfInputComponent),  // replace name as appropriate
      multi: true
    }
  ]
})
export class ExternalPdfInputComponent implements ControlValueAccessor  {
  constructor(private http:HttpClient){}
  onTouched(){}
  src = ""
  registerOnChange(fn :(value: string | null) => void): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouched = fn }
  setDisabledState?(isDisabled: boolean): void {  }
  writeValue(obj: any): void {}
  onChange = (value) => {};
  customChange(value){
    this.src = value
    this.onChange(value)
    return this.http.get<any>(this.src).subscribe((res)=>{
      console.log(res.headers.get('X-Custom-Header'))
      alert()
    });

  }

}
