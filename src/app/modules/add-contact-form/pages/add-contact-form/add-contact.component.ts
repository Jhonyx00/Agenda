import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
} from '@angular/core';
import { DynamicHostDirective } from 'src/app/shared/directives/dynamic-host.directive';
import { DynamicPhoneComponent } from '../../../contacts-list/components/dynamic-phone/dynamic-phone.component';
import { AddContactService } from '../../services/add-contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactFormComponent {
  constructor(private addContactService: AddContactService) {}

  @ViewChild(DynamicHostDirective, { read: ViewContainerRef })
  public dynamicHost!: ViewContainerRef;
  private componentRef!: ComponentRef<DynamicPhoneComponent>;

  public phoneIndex!: number;

  public createComponent(): void {
    this.componentRef = this.dynamicHost.createComponent(DynamicPhoneComponent);
    const componentIndex = this.dynamicHost.indexOf(this.componentRef.hostView);
    (this.componentRef.instance as DynamicPhoneComponent).phoneIndex =
      componentIndex + 2;
  }

  public deleteComponent(): void {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  //

  public addContact(): void {}
}
