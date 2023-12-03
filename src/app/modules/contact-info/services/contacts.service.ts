import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor(private http: HttpClient) {}
  url = environment.API_URL;
  headers = new HttpHeaders().set('X-API-Key', '7802c4c0');
  urlContacts = this.url + 'contacts';

  getContacts(data: any): Observable<any> {
    return this.http.put(this.urlContacts, data, {
      headers: this.headers.set('Authorization', 'Bearer ' + '12345678at'),
    });
  }
}
