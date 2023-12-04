import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../../contact-info/services/contacts.service';
import { Router } from '@angular/router';
import { DeleteContactService } from '../../services/deleteContact.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list-container.component.html',
  styleUrls: ['./contacts-list-container.component.css'],
})
export class ContactsListContainerComponent implements OnInit {
  constructor(
    private contactsService: ContactsService,
    private router: Router,
    private deleteContactService: DeleteContactService
  ) {}
  ngOnInit(): void {
    this.initContacts();
  }
  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.initContacts();
  }
  public currentPage = 1;
  public contacts = new Array();
  public total = 0;

  initContacts(): void {
    const offset = (this.currentPage - 1) * 10;
    this.contactsService
      .getContacts({
        offset: offset,
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

  toCardContact(item: any) {
    localStorage.setItem('contact', JSON.stringify(item));
    this.router.navigate(['contact-info']);
  }

  deleteContact(id: number) {
    this.deleteContactService.deleteContact(id).subscribe({
      next: (response) => {
        if (response.succeed) {
          console.log('usuario borrado: ', response);
          console.log('id', id);
          this.initContacts();
        }
      },
      error: (error) => {
        console.log('error de borrar usuario', error);
      },
    });
  }
}
