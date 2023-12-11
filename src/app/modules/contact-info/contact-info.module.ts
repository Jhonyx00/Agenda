import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contact-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactInfoContainerComponent } from './pages/contacts-info-container/contact-info.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactInfoContainerComponent],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class ContactsInfoModule {}
