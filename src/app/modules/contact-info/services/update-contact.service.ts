import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UpdateContactService {
  constructor(private http: HttpClient) {}

  private url = environment.apiUrl;
  private urlContactUpdate = this.url + 'contacts/update/';
  private apiKey = '7802c4c0';

  updateContact(data: any, contactId: number): Observable<any> {
    const url = `${this.urlContactUpdate}${contactId}?key=${this.apiKey}`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer 12345678at',
    });

    if (!data.contactFirstName) {
      console.log('faltan campos');
    }
    return this.http.put(url, data, { headers });
  }
}
