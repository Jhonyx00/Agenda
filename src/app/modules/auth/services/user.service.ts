import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  private url = environment.apiUrl;
  private userUrl = this.url + 'users/profile/123';
  private apiKey = '7802c4c0';

  public getUserInfo(): Observable<any> {
    const url = `${this.userUrl}?key=${this.apiKey}`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer 12345678at',
    });

    return this.http.get(url, { headers });
  }
}
