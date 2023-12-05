import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = environment.apiUrl;

  //  private urlLogin = this.url + 'auth/login';
  // private urlLogOut = this.url + 'auth/logout';

  constructor(private http: HttpClient) {}

  // headers = new HttpHeaders().set('X-API-Key', '7802c4c0');

  private loginUrl = this.url + 'auth/login';
  private logoutUrl = this.url + 'auth/logout';

  private apiKey = '7802c4c0';
  public login(data: any): Observable<any> {
    const url = `${this.loginUrl}?key=${this.apiKey}`;
    // const headers = new HttpHeaders({
    //   Authorization: 'Bearer 12345678at',
    // });

    return this.http.put(url, data);

    // return this.http.put(this.urlLogin, data, { headers: this.headers });
  }

  public logout(): Observable<any> {
    if (this.getAuth() != undefined) {
      localStorage.clear();
      sessionStorage.clear();
    }

    const url = `${this.logoutUrl}?key=${this.apiKey}`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer 12345678at',
    });

    return this.http.delete(url, { headers });
    // return this.http.delete(this.urlLogOut, {
    //   headers: this.headers.set('Authorization', 'Bearer ' + '12345678at'),
    // });
  }

  getAuth(): any {
    let value = sessionStorage.getItem('user');
    if (value != undefined && value != null) {
      let auth = JSON.parse(value);
      return auth;
    } else return undefined;
  }
}
