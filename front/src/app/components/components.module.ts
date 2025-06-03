import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GuardPipeModule } from '../shared/guard-pipe/guard-pipe.module';
import { ApiUrlPipeModule } from '../shared/api-url/api-url.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    GuardPipeModule,
    ApiUrlPipeModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,

  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    
  ]
})
export class ComponentsModule { }
