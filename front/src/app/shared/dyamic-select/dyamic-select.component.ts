import { Component, Input, forwardRef } from '@angular/core';
import { distinctUntilChanged, tap, switchMap, catchError, of, Subject, Observable } from 'rxjs';
import { BaseService } from '../base.service';
import { List } from 'src/app/services/list/list';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-dyamic-select',
  templateUrl: './dyamic-select.component.html',
  styleUrls: ['./dyamic-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DyamicSelectComponent),  // replace name as appropriate
      multi: true
    }
  ]
})
export class DyamicSelectComponent implements ControlValueAccessor  {
  constructor(private baseService: BaseService){}
  @Input() urlFragment: string;
  @Input() fieldName: string;
  @Input() defaultItens:[];
  @Input() multiple:boolean;
  @Input() bindLabel:string;
  @Input() closeOnSelect:boolean;
  @Input() urlGetDataById:string;
  @Input() loading:boolean;

  onChange:any = () => {};
  onTouch: any = () => {}
  selectedItemIdValues
  numberOfItemsFromEndBeforeFetchingMore = 5;
  dynamicDataList: any[] = [];
  page:number = 1;
  query:string|'' = '' ;
  totalItemsInDatabase:number = 0;
  selectedItems = []
  dataInput = new Subject<string>();
  items: any;

  /**
   * @param value to write, basically write value into form control
   */
  writeValue(value: any): void {
    this.items = value;
  }
  /**
   * Call it after any (change) in UI
   * @param fn
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  /**
   * Register event on touch
   * @param fn
   */
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  /**
   * Connect to backend in order to get complete data related to already selected option
   */
  getDefaultItemsData(){
    console.log("defaults", this.defaultItens );
    if(this.multiple == false){
      if( this.defaultItens){
        this.baseService.getById(this.urlGetDataById, this.defaultItens).subscribe((resp) => {
          this.dynamicDataList= [resp['data']] //Adiciona selecionados na lista
          this.selectedItems.push({id:resp['data']['id'] , name:resp['data'][this.fieldName]})//Adiciona na lista de selecionados com detalhes
          this.selectedItemIdValues = resp['data']['id'] //Adiciona valores
        })
      }
    }
    else{
      this.dynamicDataList = this.defaultItens //Adiciona selecionados na lista
      this.selectedItems = this.defaultItens.map((x) => {return {id:x['id'] , name:x[this.fieldName]}}) //Adiciona na lista de selecionados com detalhes
      this.selectedItemIdValues = this.defaultItens.map((x) => {return x['id']}) //Adiciona valores
    }
  }
  /**
   * Not necessary function yet :<
   * @param item
   * @param selected
   * @returns
   */
  compareWith(item, selected) {
    return item.id === selected.id
  }

  /**
   * Kinda of update from select
   * @param items Items that was selected
   */
  updateItems(items){
    this.selectedItems = []
    if(this.multiple == true){
      this.onChange(items.map((x) => {return x.id}));
      this.selectedItems = items.map(x =>{ return {id:x['id'], name:x[this.fieldName]}})
    }
    else{
      this.onChange(items.id);
      this.selectedItems = [{id:items['id'], name:items[this.fieldName]}]
    }
    this.onTouch();
  }

  /**
   * Load initial data.
   */
  ngOnInit(){

    this.loading = false
    this.getDefaultItemsData()
    this.refreshData(1, this.query).subscribe((resp) => this.updateSelectData(resp))
    console.log("ALl of them", this.dynamicDataList)
    this.dataInput.pipe(
      distinctUntilChanged(),
      tap(() => this.loading = true),
      switchMap(term => this.refreshData(this.page, term)
      .pipe(
          catchError(() => of([])), // empty list on error{}
          tap(() => {
            this.loading = true
            this.query = term
          })
      )
      )
    )
    .subscribe((resp) => {
      this.page = 0
      this.updateSelectData(resp)

      if(typeof this.query === 'undefined' || this.query === null){
        this.query = ''
        this.onScrollToEnd()
      }
    })
  }

  /**
   * Get data from backend on scroll event is fired
   * @param page get actual page in database
   * @param query Get actual user typed query
   * @returns
   */
  refreshData(page:number, query:string):Observable<List> {
    return this.baseService.listAll(this.urlFragment, page, query, this.fieldName)
  }

  updateSelectData(resp){
    this.dynamicDataList = resp['data']
    this.totalItemsInDatabase = resp['meta'].total
    this.loading = false;
  }

  onScroll({ end }) {
    if (this.loading || this.dynamicDataList.length >= this.totalItemsInDatabase ) {
      return;
    }
    if (end + this.numberOfItemsFromEndBeforeFetchingMore + this.selectedItems.length >= this.dynamicDataList.length) {
        this.page+=1
        this.onScrollToEnd()
    }
  }

  onScrollToEnd() {
    this.loading = true
    this.refreshData(this.page, this.query).subscribe(
      (resp) => {
        this.loading = false
        this.dynamicDataList = this.dynamicDataList.concat(resp['data'])
        this.totalItemsInDatabase = resp.meta.total
    })
  }

}
