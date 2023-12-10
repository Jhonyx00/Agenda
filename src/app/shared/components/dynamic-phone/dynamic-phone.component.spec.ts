import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicPhoneComponent } from './dynamic-phone.component';

describe('DynamicPhoneComponent', () => {
  let component: DynamicPhoneComponent;
  let fixture: ComponentFixture<DynamicPhoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicPhoneComponent]
    });
    fixture = TestBed.createComponent(DynamicPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
