import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent
  }
];

export const UserRouting = RouterModule.forChild(routes);
