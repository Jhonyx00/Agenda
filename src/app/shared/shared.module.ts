import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ContactImageComponent } from './components/contact-image/contact-image.component';
import { DynamicHostDirective } from './directives/dynamic-host.directive';

@NgModule({
  declarations: [
    NavbarComponent,
    LogoutComponent,
    ContactImageComponent,
    DynamicHostDirective,
  ],
  imports: [CommonModule],
  exports: [
    NavbarComponent,
    LogoutComponent,
    ContactImageComponent,
    DynamicHostDirective,
  ],
})
export class SharedModule {}
