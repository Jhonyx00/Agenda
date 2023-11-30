import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(private contactsService: ContactsService) {}
  ngOnInit(): void {
    this.initContacts();
  }

  public contacts = new Array();
  public total = 0;
  initContacts(): void {
    this.contactsService
      .getContacts({
        offset: 1,
        limit: 10,
        searchTerm: '',
      })
      .subscribe(
        (response) => {
          if (response.succeed) {
            console.log('Datos: ', response);
            this.contacts = response.result.list;
            this.total = response.result.count;
          } else {
            console.log('No se pudieron cargar los datos', response.error);
          }
        },

        (error) => {
          console.log('Error: ', error);
        }
      );
  }
}
