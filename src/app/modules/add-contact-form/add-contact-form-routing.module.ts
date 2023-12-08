import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactFormComponent } from './pages/add-contact-form/add-contact.component';

const routes: Routes = [{ path: '', component: AddContactFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddContactFormRoutingModule {}
