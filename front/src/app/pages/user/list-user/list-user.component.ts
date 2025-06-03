import { Component, Inject, LOCALE_ID } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { List } from 'src/app/services/list/list';
import { BaseService } from 'src/app/shared/base.service';
import { UsersService } from '../shared/user.service';
import { DynamicTableComponent } from 'src/app/shared/dynamic-table/dynamic-table.component';
import { ActivatedRoute } from '@angular/router';
import { ListTableService } from 'src/app/services/list-table/list-table.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent extends DynamicTableComponent{
  constructor(
    public baseService: BaseService,
    public userService: UsersService,
    @Inject(LOCALE_ID) public locale: string,
    public listTableService:ListTableService,
    public router:ActivatedRoute){
    super(locale, listTableService,baseService, router);
  }
  usersData : List;
  usersMeta : Meta;
  page:number = 1;
  query:string = '';
  filterByUserType:string = '';
  email:string = '';
  status:string = '';
  showLoad:boolean = true;
  urlFragment ="user"

  ngOnInit(){
    this.getData(1, '');
  }

  modifyUserType($value){
    this.filterByUserType = $value
  }

  emailQuery($value){
    console.log($value)
    this.email = $value
  }
  statusQuery($value){
    console.log($value)
    this.status = $value
  }

  filterQuery(query: string){
    this.query = query
    this.page = 1
    this.getData(this.page , query)
  }

  changePage(page: number) {

    this.showLoad = true
    console.log(this.items, this.teste);
    if(page >= 1 && page <= this.items.meta.last_page){
      this.currentPage = page
      this.paginatorEmitter.emit(page);
      if(!this.autoLoad) return;
      this.showLoad = false
      this.getData(page , this.query)
    }
  }
  getData(page:number , query:string){
    this.showLoad = true
    this.userService.listAll(page, query, 'name', this.filterByUserType, this.email, this.status).subscribe(
      (resp) => {
        this.showLoad = false
        console.log(this.items, this.teste);

        this.usersData = resp
        this.items = resp

    })
  }
}
