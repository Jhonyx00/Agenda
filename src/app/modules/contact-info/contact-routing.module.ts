import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactInfoContainerComponent } from './pages/contacts-info-container/contact-info.component';

const routes: Routes = [{ path: '', component: ContactInfoContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactsRoutingModule {}
