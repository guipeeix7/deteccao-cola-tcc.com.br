import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/api-auth/auth.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }
  mainContentCollapsed = false;
  ngOnInit() {
    // localStorage.setItem('permissions', '');
    this.authService.getUserPermission().subscribe(
      (resp) => {
        console.log(resp)
        localStorage.setItem('permissions', JSON.stringify(resp['data'].map((x) => {return x.name})));
      },
    )
  }
  expandMainContent($event){
    this.mainContentCollapsed = !this.mainContentCollapsed
  }
}

