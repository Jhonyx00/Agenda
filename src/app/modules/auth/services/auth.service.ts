import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = environment.API_URL;

  private urlLogin = this.url + 'auth/login';
  private urlLogOut = this.url + 'auth/logout';

  constructor(private http: HttpClient) {}

  headers = new HttpHeaders().set('X-API-Key', '7802c4c0');

  login(data: any): Observable<any> {
    return this.http.put(this.urlLogin, data, { headers: this.headers });
  }

  logout(): Observable<any> {
    if (this.getAuth() != undefined) {
      localStorage.clear();
      sessionStorage.clear();
    }

    return this.http.delete(this.urlLogOut, {
      headers: this.headers.set('Authorization', 'Bearer ' + '12345678at'),
    });
  }

  getAuth(): any {
    let value = sessionStorage.getItem('user');

    if (value != undefined && value != null) {
      let auth = JSON.parse(value);
      return auth;
    } else return undefined;
  }
}
