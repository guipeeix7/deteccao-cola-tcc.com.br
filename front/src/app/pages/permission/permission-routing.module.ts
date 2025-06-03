import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePermissionComponent } from './create-permission/create-permission.component';
import { ListPermissionComponent } from './list-permission/list-permission.component';
import { UpdatePermissionComponent } from './update-permission/update-permission.component';

const routes: Routes = [
  {
    path: '',
    component: ListPermissionComponent
  },
  { path: 'update/:id',
    component: UpdatePermissionComponent,
    data: { animation: 'openClosePage' }
  },
  { path: 'create',
    component: CreatePermissionComponent,
    data: { animation: 'openClosePage' }
  },
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermissionRoutingModule { }
