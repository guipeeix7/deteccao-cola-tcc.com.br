import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dynamic-paginator',
  templateUrl: './dynamic-paginator.component.html',
  styleUrls: ['./dynamic-paginator.component.scss']
})
export class DynamicPaginatorComponent {
  @Input() data ;
  currentPage : number;
  firstPageUrl : string;
  lastPageUrl : string;
  lastPage : number;
  perPage : number;
  total : number;
  showLoad:boolean = true;

  @Output() paginatorEmitter = new EventEmitter<number>();

  ngOnInit(){}

  ngOnChanges(){
    this.currentPage = this.data?.meta.current_page
    this.lastPage = this.data?.meta.last_page
    this.perPage = this.data?.meta.per_page
    this.total = this.data?.meta.total
  }

  changePage(page: number) {
    this.showLoad = true
    if(page >= 1 && page <= this.lastPage){
      this.currentPage = page
      this.paginatorEmitter.emit(page);
    }
  }
}
