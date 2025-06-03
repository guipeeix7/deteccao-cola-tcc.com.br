import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseService } from 'src/app/shared/base.service';
import { List } from '../models/list';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-base-list-scrollable',
  templateUrl: './base-list-scrollable.component.html',
  styleUrls: ['./base-list-scrollable.component.scss']
})
export class BaseListScrollableComponent {
  constructor(public baseService: BaseService){}
  currentItem;
  dataList : List;
  page:number = 1;
  query:string = '';
  urlFragment:string = ''
  loading: boolean = true;
  searchableName:string = ''
  lastPage = 0
  @Input() autoLoad: boolean = true;
  @Output() searchEmitter = new EventEmitter<string>();


  totalItems:number = 0

  ngOnInit(){
    this.dataList = <List>{}
    this.getData(1, '')

  }

  selectItem(resumoId){
    let index = this.dataList['data'].map((x) => {return x.id}).indexOf( resumoId )
    this.currentItem = this.dataList['data'][index]
  }

  searchDatabase(query:string){
    this.dataList = <List>{};
    this.query = query
    this.page = 1
    this.searchEmitter.emit(query)
    if(!this.autoLoad) return;

    this.getData(this.page , query)
  }

  nextInQueue(){
    if(this.loading == true){
      return
    }
    const index = this.dataList['data'].findIndex(x => x.id === this.currentItem.id);
    if(this.dataList['data'].length-1 < index+2){
      this.getData(this.page, this.query)
    }
    this.currentItem = this.dataList['data'][index+1]
  }

  prevInQueue(){
    const index = this.dataList['data'].findIndex(x => x.id === this.currentItem.id);
    if(index > 0){
      this.currentItem = this.dataList['data'][index-1]
    }
  }

  getData(page:number , query:string){
    this.loading = true
    if(typeof this.dataList['meta'] !== 'undefined' && this.dataList['meta']['last_page'] < page ){
      this.loading = false
      return
    }

    this.baseService.listAll(this.urlFragment, page, query, this.searchableName).subscribe(
      (resp) => {

        if(resp['data'].length == 0){
          Swal.fire({
            position: 'top-end',
            icon: 'info',
            title: 'Não foi possível localizar resumos.',
            showConfirmButton: false,
            timer: 2000
          })
          this.loading = false
          return;
        }
        else if(Object.keys(this.dataList).length == 0){
          this.dataList = resp
          this.currentItem = this.dataList['data'][0]
        }
        else{
          this.dataList['data'].push(...resp['data'])
          this.dataList['meta'] = this.dataList['meta']
          this.dataList['links'] = this.dataList['links']
        }
        this.page+=1

        this.totalItems = resp['meta'].total
        this.loading = false
    })
  }

  onScroll(event: any) {
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight-50) {
      this.getData(this.page, this.query)
    }
  }


  destroyElement(id, url = ''){
    console.log('teh urlFragment ' + this.urlFragment )
    let deleteUrl = url != '' ? url : this.urlFragment
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'Esta ação nao poderá ser desfeita',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Deletar!',
      cancelButtonText: 'Cancelar'
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.baseService.destroyRow(deleteUrl, id).subscribe(data => {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Dado deletado com sucesso',
              showConfirmButton: false,
              timer: 2000
            }).then(() => {
              let index = this.dataList['data'].map((x) => {return x.id}).indexOf( id )
              this.dataList['data'].splice(index, 1); // 2nd parameter means remove one item only
              this.getData(this.page , this.query)
              if(this.dataList['data'].length == 0){
                this.totalItems = 0
              }
            })
          })
        }
      })
  }
}
