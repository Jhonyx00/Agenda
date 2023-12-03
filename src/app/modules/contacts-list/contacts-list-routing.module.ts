import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsListContainerComponent } from './pages/contacts-list-container/contacts-list-container.component';

const routes: Routes = [
  { path: '', component: ContactsListContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactsListRoutingModule {}
