import { Component, OnInit } from '@angular/core';
import {LoginService} from './shared/login.service';
import {HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {ApplicationService} from '../shared/services/application.service';
import {LoginCredentials} from './shared/model/loginCredentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginCredentials: LoginCredentials;

  constructor(private loginService: LoginService,
              private cookieService: CookieService,
              private route: Router) {
  }

  ngOnInit() {
    this.resetValidations();
  }

  private resetValidations(): void {
    this.loginCredentials = {
      loginMessage: '',
      passwordMessage: '',
      invalidUser: ''
    };
  }

  public openForgotPassword(): void {
    this.route.navigateByUrl('/reset-email');
  }

  public login(email: string, password: string): void {
    if (this.validate(email, password)) {
      this.loginService.login(email, password)
        .subscribe(value => {
          localStorage.setItem(ApplicationService.token, value.token);
          this.loginService.getMe()
            .subscribe(me => {
              localStorage.setItem(ApplicationService.me, JSON.stringify(me));
              if (me.roles.find(role => role === 'ROLE_ADMIN')) {
              this.navigate('/admin');
              } else {
                this.navigate('/user');
              }
            }, error => {
              this.loginCredentials.invalidUser = error.error.message;
            });
        }, (error: HttpResponse<any>) => {
          // @ts-ignore
          this.loginCredentials.invalidUser = error.error.message;
        });
    }
  }

  private navigate(url: string): void {
        this.route.navigateByUrl(url) ;
  }

  private validate(email: string, password: string): boolean {
    this.resetValidations();
    let valid = true;
    if (email === null || email.length === 0) {
      valid = false;
      this.loginCredentials.loginMessage = 'emil is required';
    }
    if (password === null || password.length === 0) {
        valid = false;
        this.loginCredentials.passwordMessage = 'password is required';
      }

    return valid;
  }
}
