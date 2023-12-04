import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DeleteContactService {
  private apiUrl = 'https://my.api.mockaroo.com/sa/exercise/contacts/delete/';
  private apiKey = '7802c4c0';

  constructor(private http: HttpClient) {}

  deleteContact(contactId: number): Observable<any> {
    const url = `${this.apiUrl}${contactId}?key=${this.apiKey}`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer 12345678at',
    });

    return this.http.delete(url, { headers });
  }
}
