import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  apiUrl: string = 'https://private-anon-235dd020fd-technicaltaskapi.apiary-mock.com/';

  constructor(private http: HttpClient, private router: Router) {}
  
  signUp(user: User) {
    return this.http.post(this.apiUrl + 'registration', user);
  }

  login(user: User) {
    return this.http.post(this.apiUrl + 'login', user)
      .subscribe((res: any) => {
        if(res) {
          localStorage.setItem('access_token', res.token);
          this.router.navigate(['layout']);
        }
        
      })
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  logout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['']);
    }
  }
}