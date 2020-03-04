import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApplicationService} from '../../shared/services/application.service';
import {User} from '../../shared/model/User';
import {CookieService} from 'ngx-cookie-service';

@Injectable()
export class LoginService {
  private readonly header: HttpHeaders;

  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({
      'Content-Type': 'application/json',
      'cache-control': 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
      Pragma: 'Pragma',
      Expires: '0'
    });
  }

 public login(email: string, password: string): Observable<any> {
    const body = {
      email,
      password
    };
    return  this.http.post(ApplicationService.url + 'api/auth/signin', JSON.stringify(body), {headers: this.header});
 }

 public getMe(): Observable<User> {
    return this.http.get<User>(ApplicationService.url + 'user/info',
    {headers: this.header});
 }
}
