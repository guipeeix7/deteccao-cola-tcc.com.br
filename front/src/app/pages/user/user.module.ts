import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UserComponent } from './user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicTableModule } from 'src/app/shared/dynamic-table/dynamic-table.module';
import { FlatpickrModule } from 'angularx-flatpickr';
import { ModalModule } from 'src/app/shared/modal/modal.module';
import { DyamicSelectModule } from 'src/app/shared/dyamic-select/dyamic-select.module';
import { UserStatusComponent } from './user-status/user-status.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ApiUrlPipeModule } from 'src/app/shared/api-url/api-url.module';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { UserProfileFormsComponent } from './shared/user-profile-forms/user-profile-forms.component';
import { ProgressButtonModule } from 'src/app/shared/progress-button/progress-button.module';
import { LoaderModule } from 'src/app/shared/loader/loader.module';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ImageInputModule } from 'src/app/shared/image-input/image-input.module';


@NgModule({
  declarations: [
    UpdateUserComponent,
    ListUserComponent,
    UserComponent,
    UserStatusComponent,
    UserProfileComponent,
    UserProfileFormsComponent,
    RegisterUserComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    DynamicTableModule,
    FlatpickrModule.forRoot(),
    ModalModule,
    DyamicSelectModule,
    ApiUrlPipeModule,
    NgxMaskDirective,
    NgxMaskPipe,
    ImageInputModule,
    ProgressButtonModule,
    LoaderModule
  ],
  exports:[
    UpdateUserComponent,
    ListUserComponent,
    UserComponent,
    UserStatusComponent,
    UserProfileComponent,
    UserProfileFormsComponent
  ],
  providers: [
    provideNgxMask()
  ],
})
export class UserModule { }
