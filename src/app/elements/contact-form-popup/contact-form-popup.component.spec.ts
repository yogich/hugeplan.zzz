import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormPopupComponent } from './contact-form-popup.component';

describe('ContactFormPopupComponent', () => {
  let component: ContactFormPopupComponent;
  let fixture: ComponentFixture<ContactFormPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFormPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
