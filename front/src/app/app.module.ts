import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LOCALE_ID } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { httpInterceptorProviders } from './http-interceptors/index';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';
import { NgSelectModule } from '@ng-select/ng-select';
import { GuardPipeModule } from 'src/app/shared/guard-pipe/guard-pipe.module';
import { ApiUrlPipeModule } from './shared/api-url/api-url.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TreeviewModule } from 'ngx-treeview';
registerLocaleData(localeBr, 'pt')

@NgModule({
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        AuthLayoutComponent,
    ],
    exports: [
        ReactiveFormsModule
    ],
    providers: [httpInterceptorProviders, { provide: LOCALE_ID, useValue: 'pt' }],
    bootstrap: [AppComponent],
    imports: [
        BrowserAnimationsModule,
        FormsModule,

        ReactiveFormsModule,
        HttpClientModule,
        ComponentsModule,
        NgbModule,
        RouterModule,
        AppRoutingModule,
        TreeviewModule.forRoot(),
        // TreeviewModule.forRoot(),

        // PasswordStrengthMeterModule.forRoot(),
        NgSelectModule,
        GuardPipeModule,
        ApiUrlPipeModule,
        FontAwesomeModule,
    ]
})
export class AppModule {  }
