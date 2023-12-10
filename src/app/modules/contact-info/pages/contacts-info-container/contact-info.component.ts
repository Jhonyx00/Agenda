import {
  Component,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { DynamicPhoneComponent } from 'src/app/shared/components/dynamic-phone/dynamic-phone.component';
import { DynamicHostDirective } from 'src/app/shared/directives/dynamic-host.directive';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css'],
})
export class ContactInfoContainerComponent implements OnInit {
  ngOnInit(): void {
    this.displayContactInfo();
  }

  @ViewChild(DynamicHostDirective, { read: ViewContainerRef })
  public dynamicHost!: ViewContainerRef;
  private componentRef!: ComponentRef<DynamicPhoneComponent>;

  public phoneIndex!: number;

  private userString: string | null = null;
  public contact: any;

  public displayContactInfo() {
    this.userString = localStorage.getItem('contact');
    if (this.userString != null) {
      this.contact = JSON.parse(this.userString);
      console.log(this.contact);
    }
  }

  //

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
}
