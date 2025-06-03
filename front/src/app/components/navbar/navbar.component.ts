import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/pages/user/shared/user.service';
import { User } from 'src/app/pages/user/shared/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  user:User;
  constructor(location: Location,  private element: ElementRef, private router: Router, private userService: UsersService) {
    this.location = location;
  }
  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    this.userService.getUserData().subscribe((resp) => {
      this.user = resp['data'];
      console.log(this.user)
    })
  }
  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard';
  }

  logout(){
    this.userService.logout().subscribe((resp) => {
      localStorage.setItem('permissions', JSON.stringify(""))
      // alert()
      // setTimeout(()=>{                           // <<<---using ()=> syntax
      this.router.navigate(['/login']);
      // }, 2000);
    })
  }

}
