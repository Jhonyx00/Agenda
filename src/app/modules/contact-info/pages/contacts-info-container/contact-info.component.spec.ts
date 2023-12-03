import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactInfoContainerComponent } from './contact-info.component';

describe('ContactInfoContainerComponent', () => {
  let component: ContactInfoContainerComponent;
  let fixture: ComponentFixture<ContactInfoContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactInfoContainerComponent],
    });
    fixture = TestBed.createComponent(ContactInfoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
