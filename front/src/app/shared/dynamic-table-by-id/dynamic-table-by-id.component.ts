import { Component, Inject, Input, LOCALE_ID, SimpleChanges } from '@angular/core';
import { DynamicTableComponent } from '../dynamic-table/dynamic-table.component';
import { ListTableService } from 'src/app/services/list-table/list-table.service';
import { BaseService } from '../base.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dynamic-table-by-id',
  templateUrl: './dynamic-table-by-id.component.html',
  styleUrls: ['./dynamic-table-by-id.component.scss']
})
export class DynamicTableByIdComponent extends DynamicTableComponent {
  constructor(
    @Inject(LOCALE_ID) public locale: string,
    public listTableService:ListTableService,
    public baseService: BaseService,
    public router:ActivatedRoute
    ) { super(locale, listTableService, baseService, router); }
  @Input() fatherId:number
  @Input() lastCreatedItem:number //Get the last updated data to trigger angular onChange (:'
  @Input() urlFragmentToDelete:number

  ngOnChanges(changes: SimpleChanges){
    this.itemValues = []
    if(this.componentInit){
      this.showLoad = true
      this.convertData(this.page , 'query')
    }
    this.getData(1, '');
  }

  destroyRow(id){
    console.log('teh urlFragment ' + this.urlFragmentToDelete )
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
          this.listTableService.destroyRow(this.urlFragmentToDelete, id).subscribe(data => {
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
  updateSubjetList(){
  }
}
