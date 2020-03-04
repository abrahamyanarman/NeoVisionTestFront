import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppRouting} from './app.routing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {ApplicationService} from './shared/services/application.service';
import {AngularMaterialModule} from './shared/material.module';
import {CheckToken} from './shared/guard/checkToken';
import {CookieService} from 'ngx-cookie-service';
import { WrongUrlComponent } from './wrongurl/wrongurl.component';
import {JwtInterceptorService} from './shared/services/interceptors/jwt/jwt-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    WrongUrlComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppRouting,
    FormsModule,

    // AngularMaterialModule,
    NoopAnimationsModule,
    AngularMaterialModule
  ],
  providers: [
    ApplicationService,
    CheckToken,
    CookieService,
    {
      provide: HTTP_INTERCEPTORS ,
      useClass: JwtInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
