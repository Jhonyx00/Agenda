import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../../contact-info/services/contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list-container.component.html',
  styleUrls: ['./contacts-list-container.component.css'],
})
export class ContactsListContainerComponent implements OnInit {
  constructor(
    private contactsService: ContactsService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.initContacts();
  }

  public contacts = new Array();
  public total = 0;
  initContacts(): void {
    this.contactsService
      .getContacts({
        offset: 0,
        limit: 10,
        searchTerm: '',
      })
      .subscribe({
        next: (response) => {
          if (response.succeed) {
            console.log('Datos: ', response);
            this.contacts = response.result.list;
            this.total = response.result.count;
          } else {
            console.log('No se pudieron cargar los datos', response.error);
          }
        },
        error: (error) => {
          console.log('Error: ', error);
        },
      });
  }

  toCardContact() {
    this.router.navigate(['contact-info']);
  }
}
