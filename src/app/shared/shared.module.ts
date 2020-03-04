import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LogoutComponent} from '../logout/logout.component';
import {CookieService} from 'ngx-cookie-service';
import {AngularMaterialModule} from './material.module';
import {ConfirmDialog} from './popup/confirm.dialog/confirm.dialog';
import {MessagePopup} from './popup/message/message';
import {MatDialogModule} from '@angular/material';


@NgModule({
  declarations: [
    LogoutComponent,
    ConfirmDialog,
    MessagePopup
  ],
  imports: [
    AngularMaterialModule,
    MatDialogModule

  ],
  providers: [CookieService],
  entryComponents: [
    ConfirmDialog,
    MessagePopup
  ],
  exports: [
    LogoutComponent,
    ConfirmDialog,
    MessagePopup
  ],
})
export class SharedModule { }
