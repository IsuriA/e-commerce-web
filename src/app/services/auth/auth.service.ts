import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { tap, BehaviorSubject, Observable } from 'rxjs';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpClient = inject(HttpClient);
  configService = inject(ConfigService);

  private authUserSubject = new BehaviorSubject<any>(null);
  authUser$ = this.authUserSubject.asObservable();

  signup(data: any) {
    return this.httpClient.post(`${this.configService.getApiUrl()}/user/register`, data);
  }

  login(data: any) {
    return this.httpClient.post(`${this.configService.getApiUrl()}/user/authenticate`, data)
      .pipe(tap((result: any) => {
        localStorage.setItem('authUser', JSON.stringify(result?.user));
        localStorage.setItem('authToken', result?.token);
        this.authUserSubject.next(result?.user);
      }));
  }

  getAuthToken(): string | null {
    const authTokenJson = localStorage.getItem('authToken');
    if (!authTokenJson) {
      return "";
    }

    return authTokenJson;
  } 

  logout() {
    if (this.isLoggedIn()) {
      this.httpClient.post(`${this.configService.getApiUrl()}/user/logout`, {})
        .subscribe(result => localStorage.removeItem('authUser'));
    }
  }

  isLoggedIn() {
    const authUser = localStorage.getItem('authUser');
    return authUser !== null;
  }

  getUser() {
    return JSON.parse(localStorage.getItem('authUser')!);
  }
}