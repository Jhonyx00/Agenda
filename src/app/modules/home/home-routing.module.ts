import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'contact-info',
    loadChildren: () =>
      import('../contact-info/contact-info.module').then(
        (m) => m.ContactsInfoModule
      ),
  },
  {
    path: 'contacts-list',
    loadChildren: () =>
      import('../contacts-list/contacts-list.module').then(
        (m) => m.ContactsListModule
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('../about/about-page.module').then((m) => m.AboutPageModule),
  },
  {
    path: '**',
    redirectTo: 'contacts-list',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
