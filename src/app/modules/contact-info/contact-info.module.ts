import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contact-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactInfoContainerComponent } from './pages/contacts-info-container/contact-info.component';

@NgModule({
  declarations: [ContactInfoContainerComponent],
  imports: [CommonModule, ContactsRoutingModule, SharedModule],
})
export class ContactsInfoModule {}
