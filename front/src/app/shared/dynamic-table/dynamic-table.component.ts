
import { Component, EventEmitter, Inject, Input, Output, SimpleChanges } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
import { formatDate } from '@angular/common';
import { List } from '../../services/list/list'
import { ListTableService } from '../../services/list-table/list-table.service'
import { animate, style, transition, trigger } from '@angular/animations';
import Swal from 'sweetalert2';
import { BaseService } from '../base.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss'],

})
export class DynamicTableComponent {
  constructor(
    @Inject(LOCALE_ID) public locale: string,
    public listTableService:ListTableService,
    public baseService: BaseService,
    public router:ActivatedRoute
    ) { }
    @Input() searchEnabled = true
    @Input() urlFragment : string;
    @Input() createOption : boolean = true;
    @Input() deleteOption : boolean = true;
    @Input() tableName : string;
    @Input() customId : string;
    @Input() filter : string[];
    @Input() searchable :string[];
    @Input() items : List | null;
    @Input() autoLoad: boolean = true;
    @Input() roleName: string = '';
    @Output() paginatorEmitter = new EventEmitter<number>();
    @Output() searchEmitter = new EventEmitter<string>();
    @Output() deleteEmitter = new EventEmitter<number>();
    @Input() isHtml:boolean = false;
    protected currentPage:number = 1;
    protected first_page_url:string;
    protected last_page :number;
    protected per_page :number;
    protected total :number;
    public componentInit: boolean = false;
    dataLoaded: Promise<boolean>;
    teste = 'aa';
    showLoad:boolean = true;
    noDataFound:boolean = false;
    labels = []
    itemValues = []
    objectKeys = Object.keys
    objectValues = Object.values
    pageData = []

    page:number = 1;
    query:string = '';


    ngOnInit(){
      this.showLoad = true

      //Overload roleName on variable overwrite
      this.roleName = this.roleName != '' ? this.roleName : this.urlFragment;

      if(!this.autoLoad){
        this.showLoad = false
        this.convertData(this.page, this.query);
        this.dataLoaded = Promise.resolve(true);
        // alert('executed Firts init')

      }
      else{
        // alert('executed Firts init')
        this.getData(1, '');
      }

      if(!this.autoLoad && this.items == null){
        alert('Pleas provide array of items loaded from server')
      }
      this.componentInit = true
    }

    ngOnChanges(changes: SimpleChanges){
      if(this.componentInit){
        this.showLoad = true
        this.convertData(this.page , 'query')
      }
    }

    changePage(page: number) {

      this.showLoad = true
      console.log(this.items, this.teste);
      if(page >= 1 && page <= this.items.meta.last_page){
        this.currentPage = page
        this.paginatorEmitter.emit(page);
        if(!this.autoLoad) return;
        this.getData(page , this.query)
      }
    }

    searchDatabase(query:string){

      this.showLoad = true
      this.query = query
      this.page = 1
      this.searchEmitter.emit(query)
      if(!this.autoLoad) return;

      this.getData(this.page , query)

    }

    destroyRow(id){
      console.log('teh urlFragment ' +this.urlFragment )
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
            this.listTableService.destroyRow(this.urlFragment, id).subscribe(data => {
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Dado deletado com sucesso',
                showConfirmButton: false,
                timer: 2000
              }).then(() => {
                this.deleteEmitter.emit(1)
                this.getData(this.page , this.query)

                this.convertData(this.page , this.query)
              })
            })
          }
        })
    }

    filterArray() {
      for(let item of this.filter){
        // console.log('this is a item', item )
        this.labels = this.labels.filter(e => e !== item);
      }

      for(let item of this.filter){
        for(let arrayItem in this.itemValues){
          delete this.itemValues[arrayItem][item];
        }
      }
    }

    transformDate(){
      for(let index in this.itemValues){
        this.showLoad = false

        if(typeof(this.itemValues[index]['created_at']) !== 'undefined'){
          this.itemValues[index]['created_at'] = formatDate(this.itemValues[index]['created_at'], 'medium', this.locale)
        }
        if(typeof(this.itemValues[index]['updated_at']) !== 'undefined'){
          this.itemValues[index]['updated_at'] = formatDate(this.itemValues[index]['updated_at'], 'medium', this.locale)
        }
        if(typeof(this.itemValues[index]['deleted_at']) !== 'undefined'){
          this.itemValues[index]['deleted_at'] = formatDate(this.itemValues[index]['deleted_at'], 'medium ', this.locale)
        }
      }
    }

    loadChanges() {
      if(typeof(this.items) !== 'undefined' && this.items.data.length > 0){
        this.noDataFound = false

        this.labels = Object.keys(this.items['data'][0])
        // this.itemValues = Object.values(this.items['data'] )
        // Use line if Backend is overCapacity
        // Handles null exception
        this.itemValues = Object.values(this.items['data'].map((x) => {
          for(let label of this.labels){
            x[label] = (x[label] == null) ? '' : x[label]
          }
          return x;
        }) )
        this.transformDate()

        if(this.filter.length !== 0){
          this.filterArray()
        }
      }
      else{
        this.noDataFound = true
      }
    }

    convertData(page:number , query:string){
      this.noDataFound = false
      this.currentPage = this.items.meta.current_page
      this.first_page_url = this.items.links.first
      this.last_page = this.items.meta.last_page
      this.per_page = this.items.meta.per_page
      this.total = this.items.meta.total
      this.loadChanges()
    }
    /**
     * The following set of functions could actually be in components
     *
     */

    getData(page:number , query:string){
      this.baseService.listAll(this.urlFragment, page, query, this.searchable).subscribe(
        (resp) => {
          console.log('executed before')
          this.items = resp
          this.showLoad = false
          this.convertData(this.page, this.query);
          this.dataLoaded = Promise.resolve(true);
      })
    }

}

