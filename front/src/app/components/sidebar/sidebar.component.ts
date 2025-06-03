import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/pages/user/shared/user.service';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  permission?:string;
  subRoute?:RouteInfo[];
}

export const ROUTES: RouteInfo[] = [

  {
    path: '/login',
    title: 'Login',
    icon: 'ni-key-25 text-info',
    class: '',
    // permission: ''
  },

  {
    path: '/user/my-account',
    title: 'Atualizar dados',
    icon: 'fas fa-user text-grey',
    class: '',
    permission: ''
  },


];

@Component({
  selector: 'app-sidebar',

  templateUrl: './sidebar.component.html',

  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
  sideBarCollapsed = true;
  subMenuColapsed : boolean[] = [];
  profilePhoto: any;
  userName: any;
  userInfo: any;

  constructor(private router: Router, private userService: UsersService) { }
  @Output() emitSideBarCollapsed = new EventEmitter<boolean>();

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
    const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
    this.userName = userInfo.name;
    this.profilePhoto = userInfo.fotoPerfil;

    this.emitSideBarCollapsed.emit(this.sideBarCollapsed);
    this.userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');

  }
  hideSideBar(){
    this.sideBarCollapsed = false;

    this.hideSubmenus('')
    this.emitSideBarCollapsed.emit(this.sideBarCollapsed);
  }

  expandSideBar(){

    this.sideBarCollapsed = true;
    this.hideSubmenus('')
    this.emitSideBarCollapsed.emit(this.sideBarCollapsed);
  }
  partialHideSideBar() {
    this.sideBarCollapsed = !this.sideBarCollapsed
    this.hideSubmenus('')
    this.emitSideBarCollapsed.emit(this.sideBarCollapsed);
  }

  showSubMenu($elementPath){
    if(this.sideBarCollapsed == false){
      this.subMenuColapsed[$elementPath] = !this.subMenuColapsed[$elementPath]
      this.hideSubmenus($elementPath)
    }
  }


  hideSubmenus($elementPath){
    for (let item in this.subMenuColapsed){
      if($elementPath == item){
        continue;
      }
      this.subMenuColapsed[item] = false
    }
  }

  logout(){
    this.userService.logout().subscribe((resp) => {
      localStorage.setItem('permissions', JSON.stringify(""))
      this.router.navigate(['/login']);
    })
  }
}
