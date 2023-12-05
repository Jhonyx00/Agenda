import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DeleteContactService {
  private url = environment.apiUrl;
  private deleteUserUrl = this.url + 'contacts/delete/';
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  deleteContact(contactId: number): Observable<any> {
    const url = `${this.deleteUserUrl}${contactId}?key=${this.apiKey}`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer 12345678at',
    });

    return this.http.delete(url, { headers });
  }
}
