import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { ProgressButtonModule } from 'src/app/shared/progress-button/progress-button.module';
import { ResendAccountConfirmEmailComponent } from 'src/app/pages/resend-account-confirm-email/resend-account-confirm-email.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    ProgressButtonModule
    // NgbModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ResendAccountConfirmEmailComponent,
  ]
})
export class AuthLayoutModule { }
