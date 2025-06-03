import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment'

import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-pdf-input',
  templateUrl: './pdf-input.component.html',
  styleUrls: ['./pdf-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PdfInputComponent),  // replace name as appropriate
      multi: true
    }
  ]
})
export class PdfInputComponent {
  constructor(private http:HttpClient){}

  API_URL = environment.API_URL;
  writeValue(obj: any): void {  }
  registerOnChange(fn: any): void { this._onChange = fn }
  registerOnTouched(fn: any): void { this._onTouch = fn }
  setDisabledState?(isDisabled: boolean): void {  }
  _onChange(value){}
  _onTouch(){}
  file:File

  isPdf:any
  @Input() src:string

  ngOnInit(){
    this.writeValue(this.src)
    this._onChange(this.src);
    this.isPdf = true



    if(this.src){
      // alert(this.src)
      let queryParams = new HttpParams()
      queryParams = queryParams.append("caminho", this.src);

      this.http.get<any>(this.API_URL+'pdf-storage', { params: queryParams }).subscribe((res) => {
        var reader = new FileReader();
        console.log(res)
        this.src = 'data:application/pdf;base64,'+res['pdf']
      })
    }

    // this.convertContentToFile(this.src)
  }
  onFileChange(event){
    this.file = event.target.files[0];

    if (event.target.files && event.target.files[0]) {
      this.isPdf = (event.target.files[0].type == "application/pdf") ? true : false
      if(this.isPdf){
        var reader = new FileReader();
        reader.onload = (event: any) => {
          this.src = event.target.result;
          // console.log(this.src)
        }
        reader.readAsDataURL(event.target.files[0]);

        this._onChange(this.file);
      }
      else{
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Por favor faça o upload de um pdf',
          showConfirmButton: false,
          timer: 2000
        })
        this.file = null
        event.target.value = null;

      }
      this._onTouch();
    }
  }
}
