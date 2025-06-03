import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRoleComponent } from './list-role/list-role.component';
import { CreateRoleComponent } from './create-role/create-role.component';
import { UpdateRoleComponent } from './update-role/update-role.component';
import { CommonModule } from '@angular/common';
import {permissionGuard} from '../../guards/permissions.guard';

const routes: Routes = [
  {
    path: '',
    component: ListRoleComponent,
    canActivate: [permissionGuard],
    data: {
      animation: 'openClosePage',
      permission: 'read role'
    }
  },
  { path: 'update/:id',
    component: UpdateRoleComponent,
    canActivate: [permissionGuard],
    data: {
      animation: 'openClosePage',
      permission: 'update role'
    }
  },
  { path: 'create',
    component: CreateRoleComponent,
    canActivate: [permissionGuard],
    data: {
      animation: 'openClosePage',
      permission: 'create role'
    }
  },
]
@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
