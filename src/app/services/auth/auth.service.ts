import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { tap, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpClient = inject(HttpClient);
  baseUrl = 'https://localhost:7256/api/user';

  private authUserSubject = new BehaviorSubject<any>(null);
  authUser$ = this.authUserSubject.asObservable();

  signup(data: any) {
    return this.httpClient.post(`${this.baseUrl}/register`, data);
  }

  login(data: any) {
    return this.httpClient.post(`${this.baseUrl}/authenticate`, data)
      .pipe(tap((result: any) => {
        localStorage.setItem('authUser', JSON.stringify(result?.user));
        localStorage.setItem('authToken', result?.token);
        this.authUserSubject.next(result?.user);
      }));
  }

  getAuthToken() : string | null {
    const authTokenJson = localStorage.getItem('authToken');
    if(!authTokenJson) {
      return "";
    }

    return authTokenJson;
  }

  logout() {
    if(this.isLoggedIn()) {
      localStorage.removeItem('authUser');
    }
  }

  isLoggedIn() {
    return localStorage.getItem('authUser') !== null;
  }

  getUser() {
    return JSON.parse(localStorage.getItem('authUser')!);
  }
}