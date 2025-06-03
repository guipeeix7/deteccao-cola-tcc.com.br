import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserStatusComponent } from './user-status/user-status.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RegisterUserComponent } from './register-user/register-user.component';

const routes: Routes = [
  {
    path: 'my-account',
    component: UserProfileComponent
  },
  {
    path: '',
    component: ListUserComponent
  },
  { path: 'update/:id',
    component: UpdateUserComponent,
    data: { animation: 'openClosePage' }
  },
  { path: 'create',
    component: RegisterUserComponent,
    data: { animation: 'openClosePage' }
  },
  { path: 'status',
    component: UserStatusComponent,
    data: { animation: 'openClosePage' }
  }
  // { path: 'payments/:id',
  //   component: PaymentDetailsComponent,
  //   data: { animation: 'openClosePage' }
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
