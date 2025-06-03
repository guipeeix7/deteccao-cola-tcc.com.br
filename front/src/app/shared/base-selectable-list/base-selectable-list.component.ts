import { Component, EventEmitter, Output, Input } from '@angular/core';
import { BaseService } from '../base.service';
import { List } from '../models/list';
import { BaseSelectableList } from './base-selectable-list-iterface'
@Component({
  selector: 'app-base-list',
  templateUrl: './base-selectable-list.component.html',
  styleUrls: ['./base-selectable-list.component.scss']
})
export class BaseListComponent implements BaseSelectableList{
  constructor(public baseService: BaseService){}
  @Output() selectedListEmitter = new EventEmitter<number[]>();
  @Input() itemSelectedList: any[] = [];

  ListData : List;
  page:number = 1;
  query:string = '';
  namedRoute = ''
  itemName = ''

  ngOnInit(){
    this.getData(1, '');
  }

  filterQuery(query: string){
    this.query = query
    this.page = 1
    this.getData(this.page , query)
  }

  changePage(page: number) {
    this.page = page
    this.getData(page , this.query)
  }

  deletedItem(){
    this.getData(this.page , this.query)
  }

  emitSelections(selecteds){
    this.selectedListEmitter.emit(selecteds.map(e => {return e['id']}))
  }

  toggleSelection(newItem: any) {
    let index = this.itemSelectedList.map(e => {return e['id']}).indexOf(newItem['id'], 0);
    index > -1 ? this.itemSelectedList.splice(index, 1) : this.itemSelectedList.push(newItem);
    this.emitSelections(this.itemSelectedList)
  }

  getData(page:number , query:string){
    this.baseService.listAll(this.namedRoute, page, query, this.itemName ).subscribe(
      (resp) => {
        this.ListData = resp
    })
  }
}
