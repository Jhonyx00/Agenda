import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private url = environment.apiUrl;
  private loginUrl = this.url + 'auth/login';
  private logoutUrl = this.url + 'auth/logout';

  private registerUrl = this.url + 'users/create';
  private apiKey = '7802c4c0';

  public login(data: any): Observable<any> {
    const url = `${this.loginUrl}?key=${this.apiKey}`;
    return this.http.put(url, data);
  }

  public register(data: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer 12345678at',
    });

    const url = `${this.registerUrl}?key=${this.apiKey}`;
    return this.http.post(url, data, { headers });
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
  }

  getAuth(): any {
    let value = sessionStorage.getItem('user');
    if (value != undefined && value != null) {
      let auth = JSON.parse(value);
      return auth;
    } else return undefined;
  }
}
