import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-base-item',
  templateUrl: './base-item.component.html',
  styleUrls: ['./base-item.component.scss']
})
export class BaseItemComponent {
  @Input() ItemData: any;
  @Input() selectedItems:number[];
  @Output() emmitItemSelect = new EventEmitter<any>();;
  clicked = false

  ngOnInit(){
    let index = -1
    if(this.selectedItems){
      index = this.selectedItems.map(e => {return e['id']}).indexOf(this.ItemData.id, 0);
    }

    if(index > -1) {
      this.clicked = true
    }
  }

  toggleClickedState = () => {
    this.clicked = this.clicked ? false : true;
  }

  selectItem = ($e) => {
    console.log($e)
    this.toggleClickedState()
    this.emmitItemSelect.emit($e);
  }
}
