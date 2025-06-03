import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetPasswordRoutingModule } from './reset-password-routing.module';
import { OpenRequestComponent } from './open-request/open-request.component';
import { RenewComponent } from './renew/renew.component';
import { ResetPasswordComponent } from './reset-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgressBarComponent } from 'src/app/shared/progress-bar/progress-bar.component';
import { ProgressButtonComponent } from 'src/app/shared/progress-button/progress-button.component';
import { ProgressButtonModule } from 'src/app/shared/progress-button/progress-button.module';


@NgModule({
  declarations: [
    OpenRequestComponent,
    RenewComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    ResetPasswordRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ProgressButtonModule,
    ProgressButtonModule
  ]
})
export class ResetPasswordModule { }
