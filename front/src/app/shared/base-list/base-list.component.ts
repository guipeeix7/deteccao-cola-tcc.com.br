import { Component, EventEmitter, Output, Input } from '@angular/core';
import { BaseService } from '../base.service';
import { Meta } from '@angular/platform-browser';
import { List } from '../models/list';

@Component({
  selector: 'app-base-list',
  templateUrl: './base-list.component.html',
  styleUrls: ['./base-list.component.scss']
})
export class BaseListComponent {
  constructor(public baseService: BaseService){}
  dataList : List;
  loading: boolean = true;
  orgaosMeta : Meta;
  page:number = 1;
  query:string = '';
  searchableName:string = ''
  urlFragment: string = '';
  showLoad:boolean = true;
  @Input() autoLoad: boolean = true;

  @Output() searchEmitter = new EventEmitter<string>();

  ngOnInit(){
    this.getData(1, '');
  }


  searchDatabase(query:string){
    this.dataList = <List>{};

    this.showLoad = true
    this.query = query
    this.page = 1
    this.searchEmitter.emit(query)
    if(!this.autoLoad) return;

    this.getData(this.page , query)
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

  getData(page:number , query:string){
    this.loading = true
    this.baseService.listAll(this.urlFragment, page, query, this.searchableName).subscribe(
      (resp) => {
        this.dataList = resp
        this.loading = false
      })
  }
}
