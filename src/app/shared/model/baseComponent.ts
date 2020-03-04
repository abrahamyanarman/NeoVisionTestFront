import {ApplicationService} from '../services/application.service';
import {User} from './User';

export class BaseComponent {
  protected user: User;
  public userRoles: string;
  constructor() { }

  protected generateUserInfo() {
    this.user = JSON.parse(localStorage.getItem(ApplicationService.me));
    this.generateUserRoles();
  }

  protected generateUserRoles() {
    const roles = this.user.roles;
    if (roles) {
      this.userRoles =  roles.map(role => role).join(', ');

    }
  }
}
