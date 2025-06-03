import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RolesRoutingModule } from './role-routing.module';
import { UpdateRoleComponent } from './update-role/update-role.component';
import { CreateRoleComponent } from './create-role/create-role.component';
import { ListRoleComponent } from './list-role/list-role.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RolesComponent } from './role.component';
import { DynamicTableModule } from 'src/app/shared/dynamic-table/dynamic-table.module';
import { DyamicSelectModule } from 'src/app/shared/dyamic-select/dyamic-select.module';
import { GuardPipeModule } from 'src/app/shared/guard-pipe/guard-pipe.module';


@NgModule({
  declarations: [
    RolesComponent,
    UpdateRoleComponent,
    CreateRoleComponent,
    ListRoleComponent,
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,
    ReactiveFormsModule,
    DynamicTableModule,
    DyamicSelectModule,
    GuardPipeModule
  ]
})

export class RolesModule { }
