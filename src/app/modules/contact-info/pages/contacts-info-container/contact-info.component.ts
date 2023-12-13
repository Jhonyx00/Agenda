import {
  Component,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray,
} from '@angular/forms';
import { Email } from 'src/app/core/interfaces/email';
import { Phone } from 'src/app/core/interfaces/phone';
import { Tag } from 'src/app/core/interfaces/tag';
import { DynamicPhoneComponent } from 'src/app/shared/components/dynamic-phone/dynamic-phone.component';
import { DynamicHostDirective } from 'src/app/shared/directives/dynamic-host.directive';
import { UpdateContactService } from '../../services/update-contact.service';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css'],
})
export class ContactInfoContainerComponent implements OnInit {
  contactPhoto: string = 'contactPhoto';
  contactFirstName: string = 'contactFirstName';
  contactLastName: string = 'contactLastName';
  contactCompany: string = 'contactCompany';
  contactEmails: string = 'contactEmails';
  contactBirthday: string = 'contactBirthday';
  contactAlias: string = 'contactAlias';
  contactNotes: string = 'contactNotes';
  contactTags: string = 'contactTags';
  contactPhones: string = 'contactPhones';

  editContactForm!: FormGroup;

  //dinamic components array

  emailsArray: any;
  phonesArray: any;
  tagsArray: any;

  arreglo: any = [];

  counter: number = 0;
  size = 10;
  constructor(
    private formBuilder: FormBuilder,
    private updateContactService: UpdateContactService
  ) {
    this.editContactForm = this.formBuilder.group({
      contactPhoto: new FormControl('', [Validators.required]),
      contactFirstName: new FormControl('', [Validators.required]),
      contactLastName: new FormControl('', [Validators.required]),
      contactCompany: new FormControl('', [Validators.required]),
      contactEmails: this.formBuilder.array([]),
      contactBirthday: new FormControl('', [Validators.required]),
      contactAlias: new FormControl('', [Validators.required]),
      contactNotes: new FormControl('', [Validators.required]),
      contactTags: this.formBuilder.array([]),
      contactPhones: this.formBuilder.array([]),
    });
  }

  public displayContactInfo() {
    this.userString = localStorage.getItem('contact');
    if (this.userString != null) {
      this.contact = JSON.parse(this.userString);
      console.log(this.contact);
    }
  }

  initForm() {
    this.editContactForm.patchValue({
      contactPhoto: this.contact.contactPhoto,
      contactCompany: this.contact.contactCompany,
      contactFirstName: this.contact.contactFirstName,
      contactLastName: this.contact.contactLastName,
      // contactEmails: this.contact.contactEmails,
      contactBirthday: this.contact.contactBirthday,
      contactAlias: this.contact.contactAlias,
      contactNotes: this.contact.contactNotes,
      // contactTags: this.contact.contactTags,
      // contactPhones: this.contact.contactPhones,
    });

    //EMAILS
    this.emailsArray = this.editContactForm.get('contactEmails') as FormArray;
    this.emailsArray.clear();
    this.contact.contactEmails.map((email: Email) => {
      this.emailsArray.push(
        new FormControl(email.emailValue, [
          Validators.required,
          Validators.email,
        ])
      );
    });
    //

    //PHONES
    this.phonesArray = this.editContactForm.get('contactPhones') as FormArray;
    this.phonesArray.clear();
    this.contact.contactPhones.map((phone: Phone) => {
      const phoneFormGroup = new FormGroup({
        phoneId: new FormControl(phone.phoneId, Validators.required),
        phoneValue: new FormControl(phone.phoneValue, Validators.required),
        phoneType: new FormControl(phone.phoneType, Validators.required),
      });

      this.phonesArray.push(phoneFormGroup);
    });
    //

    //TAGS
    this.tagsArray = this.editContactForm.get('contactTags') as FormArray;
    this.tagsArray.clear();
    this.contact.contactTags.map((tag: Tag) => {
      this.tagsArray.push(new FormControl(tag.tagValue));
    });
    //
  }

  //returns EMAIL list as a form array
  get contactEmailsFormArray(): FormArray {
    return this.editContactForm.get('contactEmails') as FormArray;
  }

  //returns PHONE list as a form array
  get contactPhonesFormArray(): FormArray {
    return this.editContactForm.get('contactPhones') as FormArray;
  }

  //returns TAG list as a form array
  get contactTagsFormArray(): FormArray {
    return this.editContactForm.get('contactTags') as FormArray;
  }

  ngOnInit(): void {
    this.displayContactInfo();
    this.initForm();
  }
  public updateContactInfo() {
    for (let i = 0; i < this.counter; i++) {
      this.contactPhonesFormArray.push(this.arreglo[i]);
      this.deleteAllComponents();
    }

    const contactData = this.editContactForm.value;
    const contactId = this.contact.contactId;
    console.log('Formulario con datos para actualizar:', contactData);

    this.updateContactService.updateContact(contactData, contactId).subscribe({
      next: (response) => {
        if (response.succeed) {
          console.log('Actualización exitosa: ', response);
        } else {
          console.log('No se pudieron cargar los datos', response.error);
        }
      },
      error: (error) => {
        console.log('Error: ', error);
      },
    });
  }
  @ViewChild(DynamicHostDirective, { read: ViewContainerRef })
  public dynamicHost!: ViewContainerRef;
  private componentRef!: ComponentRef<DynamicPhoneComponent>;

  public phoneIndex!: number;
  private userString: string | null = null;
  public contact: any;

  public componentRefs: ComponentRef<DynamicPhoneComponent>[] = [];

  public createComponent(
    phoneGroup: FormGroup,
    phoneControl: FormControl
  ): void {
    this.componentRef = this.dynamicHost.createComponent(DynamicPhoneComponent);

    // esto es lo que dijo Serna en la reunión del 11 de diciembre de 2023
    // a las 12:45pm aproximadamente

    this.componentRef.instance.phoneGroup = phoneGroup;
    this.componentRef.instance.phoneControl = phoneControl;
    this.componentRefs.push(this.componentRef);
  }

  public addNewPhone(): void {
    const phoneFormGroup = new FormGroup({
      phoneId: new FormControl('', Validators.required),
      phoneValue: new FormControl('', Validators.required),
      phoneType: new FormControl('', Validators.required),
    });

    const phone = phoneFormGroup.controls.phoneValue;

    this.arreglo.push(phoneFormGroup);

    //counter+=1
    // this.contactPhonesFormArray.push(phoneControl);

    if (this.componentRefs) {
      this.createComponent(phoneFormGroup, phone);
      this.counter += 1;
    }
  }

  public deleteAllComponents() {
    this.componentRefs.forEach((component) => {
      component.destroy();
    });
  }

  public deleteComponent(index: number): void {
    // Elimina el control del FormArray
    this.contactPhonesFormArray.removeAt(index);
    //

    if (this.componentRefs[index]) {
      this.componentRefs[index].destroy();
      this.componentRefs.splice(index, 1);
    }
  }
}
