import { Component, ElementRef, EventEmitter, Input, OnInit, Optional, Output, Self, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-external-video-input',
  templateUrl: './external-video-input.component.html',
  styleUrls: ['./external-video-input.component.scss'],
  providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => ExternalVideoInputComponent),  // replace name as appropriate
        multi: true
      }
    ]
})

export class ExternalVideoInputComponent implements  ControlValueAccessor {
  constructor(public element: ElementRef, public renderer: Renderer2) {
    this.element.nativeElement
  }
  value = ''
  @Output() invalidEmitter = new EventEmitter<boolean>();
  invalid
  writeValue(obj: any): void {
    this.value = obj
    this.renderer.setAttribute(
      this.element.nativeElement,
      'value',
      obj
    );
    this.checkYoutubeRegex(obj)
  }
  registerOnChange(fn: any){this.onChange = fn;}
  registerOnTouched(fn: any): void {}
  setDisabledState(isDisabled: boolean) {  }


  onTouch: any = () => {}
  url:string
  checkYoutubeRegex(eventValue){
    var trigger = eventValue,
    regexp = new RegExp('(?:youtube(?:-nocookie)?\.com/(?:[^/]+/.+/|(?:v|e(?:mbed)?)/|.*[?&]v=)|youtu\.be/)([^"&?/\s]{11})')
    var youtubeIdIsPresent = regexp.test(trigger);
    if(youtubeIdIsPresent){
      var tests = trigger.match(regexp)[1];
      this.value = 'https://www.youtube.com/embed/'+ tests
      this.invalid = false
      this.invalidEmitter.emit(false);

    }
    else{
      this.invalid = true
      this.invalidEmitter.emit(true);

    }

    return youtubeIdIsPresent
  }

  setValues(valid){
    if(valid == 1){
      this.writeValue(this.value);
      this.onChange(this.value)
    }
    else{
      this.writeValue('');
      this.onChange('')
    }
    this.onTouch();
  }

  transformUrl(event){
    this.onChange(event.target.value)
    this.onTouch(event.target.value)
    this.setValues(this.checkYoutubeRegex(event.target.value))
  }
  onChange: any = (val) => { }

  // onChange(event){
  //   if(!this.checkYoutubeRegex(event)){
  //     this.value = ''
  //     this.invalidEmitter.emit(true);
  //     event.target.value = ''
  //     this.writeValue('');
  //     this.onTouch();
  //   }
  //   // this.onChange(event.target.value);
  // }
}
