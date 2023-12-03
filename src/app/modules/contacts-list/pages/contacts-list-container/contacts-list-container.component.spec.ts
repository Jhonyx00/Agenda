import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactsListContainerComponent } from './contacts-list-container.component';

describe('SidebarComponent', () => {
  let component: ContactsListContainerComponent;
  let fixture: ComponentFixture<ContactsListContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactsListContainerComponent],
    });
    fixture = TestBed.createComponent(ContactsListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
