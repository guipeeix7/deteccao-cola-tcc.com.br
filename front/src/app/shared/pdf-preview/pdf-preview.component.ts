import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-pdf-preview',
  templateUrl: './pdf-preview.component.html',
  styleUrls: ['./pdf-preview.component.scss']
})
export class PdfPreviewComponent {
  constructor(private http:HttpClient){}
  @Input() src;

  ngOnInit(){
    console.log("PDFFF", this.src)
    // this.src = {
    //   url: this.src,
    //   withCredentials: true,
    //   cors: 'no-cors'
    //  }
  }

}
