import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsListRoutingModule } from './contacts-list-routing.module';
import { ContactsListContainerComponent } from './pages/contacts-list-container/contacts-list-container.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PaginatorComponent } from './components/paginator/paginator.component';

@NgModule({
  declarations: [ContactsListContainerComponent, PaginatorComponent],
  imports: [CommonModule, ContactsListRoutingModule, SharedModule],
})
export class ContactsListModule {}
