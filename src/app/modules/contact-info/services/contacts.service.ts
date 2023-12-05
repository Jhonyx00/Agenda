import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor(private http: HttpClient) {}
  private url = environment.apiUrl;
  // headers = new HttpHeaders().set('X-API-Key', '7802c4c0');
  private urlContacts = this.url + 'contacts/';
  private apiKey = '7802c4c0';

  getContacts(data: any): Observable<any> {
    const url = `${this.urlContacts}?key=${this.apiKey}`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer 12345678at',
    });

    return this.http.put(url, data, { headers });
    // return this.http.put(this.urlContacts, data, {
    //   headers: this.headers.set('Authorization', 'Bearer ' + '12345678at'),
    // });
  }
}
