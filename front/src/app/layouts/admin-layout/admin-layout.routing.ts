import { RouterModule, Routes } from '@angular/router';

import { UserProfileComponent } from '../../pages/user/user-profile/user-profile.component';
import { NgModule } from '@angular/core';
import { UserComponent } from 'src/app/pages/user/user.component';
import { UserStatusComponent } from 'src/app/pages/user/user-status/user-status.component';


export const AdminLayoutRoutes: Routes = [
  {
    path: 'role',
      loadChildren: () => import('./../../pages/role/role-routing.module').then(m => m.RolesRoutingModule),
    },
    { path: 'user-profile',   component: UserProfileComponent },
    {
      path: 'permission',
      loadChildren: () => import('./../../pages/permission/permission-routing.module').then(m => m.PermissionRoutingModule)
    },
    {
      path: 'user',
      component: UserComponent,
      loadChildren: () => import('./../../pages/user/user.module').then(m => m.UserModule)
    },
    {
      path: 'user',
      component: UserComponent,
      loadChildren: () => import('./../../pages/user/user.module').then(m => m.UserModule)
    },
    {
      path: 'overview',
      component: UserStatusComponent,
      loadChildren: () => import('./../../pages/user/user.module').then(m => m.UserModule)
    }
];

@NgModule({
  imports: [RouterModule.forChild(AdminLayoutRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
