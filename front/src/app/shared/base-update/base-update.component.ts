import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from 'src/app/shared/base.service';
import { Observable } from 'rxjs';
import { List } from 'src/app/shared/models/list';
import { BaseUpdate } from './base-update';

@Component({
  selector: 'app-base-update',
  templateUrl: './base-update.component.html',
})
export class BaseUpdateComponent implements BaseUpdate {
  constructor(private fb: FormBuilder , private baseService: BaseService, private route: ActivatedRoute ){}
  @Input() cursoId:number;
  form!: FormGroup;
  loading = false;
  disabled = false;
  urlFragment = ''
  searchableParameterName = ''
  dataFromServer : any;
  dataId : number;
  page:number = 1;
  query:string|'' = '' ;

  getData(resp){
    this.dataFromServer = resp
  }

  refreshData(page:number, query:string):Observable<List> {
    return this.baseService.listAll('dataFromServer-all', page, query, this.searchableParameterName)
  }

  ngOnInit(){
    this.dataId = Number(this.route.snapshot.paramMap.get('id'));
    this.baseService.getById(this.urlFragment,this.dataId).subscribe((resp) => {this.getData(resp['data'])})
  }

  toggleSubmit(){
    if(this.loading == true){
      this.loading = false;
      this.disabled = false;
    }else{
      this.loading = true;
      this.disabled = true;
    }
  }

  onSubmit(){
    this.toggleSubmit()
  }
}
