import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermissionRoutingModule } from './permission-routing.module';
import { CreatePermissionComponent } from './create-permission/create-permission.component';
import { UpdatePermissionComponent } from './update-permission/update-permission.component';
import { ListPermissionComponent } from './list-permission/list-permission.component';
import { PermissionComponent } from './permission.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicTableModule } from 'src/app/shared/dynamic-table/dynamic-table.module';
import { DyamicSelectModule } from 'src/app/shared/dyamic-select/dyamic-select.module';

import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    CreatePermissionComponent,
    UpdatePermissionComponent,
    ListPermissionComponent,
    PermissionComponent
  ],
  imports: [
    CommonModule,
    PermissionRoutingModule,
    DynamicTableModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DyamicSelectModule,

  ]
})
export class PermissionModule { }
