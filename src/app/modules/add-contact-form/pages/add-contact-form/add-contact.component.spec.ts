import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContactFormComponent } from './add-contact.component';

describe('AddContactComponent', () => {
  let component: AddContactFormComponent;
  let fixture: ComponentFixture<AddContactFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddContactFormComponent],
    });
    fixture = TestBed.createComponent(AddContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
