import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenRequestComponent } from './open-request/open-request.component';
import { RenewComponent } from './renew/renew.component';

const routes: Routes = [
  {
    path:'',
    component:OpenRequestComponent,
  },
  {
    path: ':token',
    component:RenewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResetPasswordRoutingModule { }
