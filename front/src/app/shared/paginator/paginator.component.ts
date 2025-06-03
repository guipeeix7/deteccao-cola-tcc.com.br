import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {
  @Input() urlFragment : string;
  @Input() currentPage : number;
  // @Input() firstPageUrl : string;
  // @Input() lastPageUrl : string;
  @Input() lastPage : number;
  @Input() perPage : number;
  @Input() total : number;
  @Output() paginatorEmitter = new EventEmitter<number>();

  ngOnInit(){}

  ngOnChanges(){}

  changePage(page: number) {
    if(page >= 1 && page <= this.lastPage){
      this.currentPage = page
      this.paginatorEmitter.emit(page);
    }
  }

}
