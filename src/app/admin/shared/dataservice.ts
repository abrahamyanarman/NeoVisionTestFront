import {Injectable} from '@angular/core';
import {ApplicationService} from '../../shared/services/application.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Role, User} from '../../shared/model/User';
import {Observable} from 'rxjs';


@Injectable()
export class DataService {

  constructor(private applicationService: ApplicationService,
              private http: HttpClient,
              private cookieService: CookieService) {
  }

  public getAllUsers(): Observable<any> {
    return this.http.get(ApplicationService.url + 'user/allusers');
  }

  public getUserById(id: string): Observable<User> {
    return this.http.get<User>(ApplicationService.url + 'user/info/' + id);
  }

  saveUser(user: any): Observable<any> {
    return this.http.post(ApplicationService.url + 'user/updateUser/' + user.userId, user);
  }

  deleteUser(id: number) {
    return this.http.delete(ApplicationService.url + 'user/' + id);
  }
}
