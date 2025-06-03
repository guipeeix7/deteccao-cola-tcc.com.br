import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-button',
  templateUrl: './progress-button.component.html',
  styleUrls: ['./progress-button.component.scss']
})
export class ProgressButtonComponent {
  @Input() loading: boolean = false;
  @Input() disabled: boolean = false;
  @Input() message: string;
  @Input() type:string = 'outline-button';
  @Input() color:string = 'primary';
  @Input() size:string = 'md';
}
