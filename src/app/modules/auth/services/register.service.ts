import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}
  private url = environment.apiUrl;
  private registerUrl = this.url + 'users/create';
  private apiKey = '7802c4c0';

  public register(data: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer 12345678at',
    });

    const url = `${this.registerUrl}?key=${this.apiKey}`;
    return this.http.post(url, data, { headers });
  }
}
