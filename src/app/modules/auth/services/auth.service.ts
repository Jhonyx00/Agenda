import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'https://my.api.mockaroo.com/sa/exercise/auth/login';

  constructor(private http: HttpClient) {}

  login(data: any): Observable<any> {
    let headers = new HttpHeaders().set('X-API-Key', '7802c4c0');
    return this.http.put(this.url, data, { headers });
  }
}
