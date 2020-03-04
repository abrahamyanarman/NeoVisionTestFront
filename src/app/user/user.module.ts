import {NgModule} from '@angular/core';
import {UserComponent} from './user.component';
import {UserRouting} from './user.routing';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';
import {AngularMaterialModule} from '../shared/material.module';
import {DataService} from '../admin/shared/dataservice';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    UserComponent],
  imports: [
    UserRouting,
    SharedModule,
    CommonModule,
    AngularMaterialModule,
    FormsModule
  ],
  providers: [
    DataService
  ]
})
export class UserModule {
}
