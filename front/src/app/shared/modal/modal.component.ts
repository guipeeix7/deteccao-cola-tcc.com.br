import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() title:string;
  @Output() closeModalEmiter = new EventEmitter<string>();
  display: string;

  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
    this.closeModalEmiter.emit('closed')
  }
  ngOnInit() {
  }

}
