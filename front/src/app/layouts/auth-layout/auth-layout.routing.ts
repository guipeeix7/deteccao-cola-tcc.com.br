import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { ResetPasswordComponent } from 'src/app/pages/reset-password/reset-password.component';
import { ResendAccountConfirmEmailComponent } from '../../pages/resend-account-confirm-email/resend-account-confirm-email.component'
export const AuthLayoutRoutes: Routes = [
    { path: 'login',
      component: LoginComponent,
      data: { animation: 'openClosePage' }
    },
    { path: 'register',       component: RegisterComponent },
    { path: 'resend-account-confirm',       component: ResendAccountConfirmEmailComponent },

    {
      path: 'password-reset',
      component: ResetPasswordComponent,
      loadChildren: () => import('./../../pages/reset-password/reset-password-routing.module').then(m => m.ResetPasswordRoutingModule)
    },

    // search-orders
];
