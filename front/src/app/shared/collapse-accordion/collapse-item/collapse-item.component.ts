import { Component, EventEmitter, Input, Output } from '@angular/core';
import Swal from 'sweetalert2';
import { BaseService } from 'src/app/shared/base.service'
@Component({
  selector: 'app-collapse-item',
  templateUrl: './collapse-item.component.html',
  styleUrls: ['./collapse-item.component.scss']
})
export class CollapseItemComponent {
  constructor(private baseService: BaseService){}
  @Input() name:string;
  collapse:string = "";
  @Input() isCollapsed:boolean = false;




  toggleCollapsable() {
    if(this.isCollapsed == false){
      this.collapse = "show";
      this.isCollapsed = true;
    }
    else{
      this.collapse = "";
      this.isCollapsed = false;
    }
  }

}
