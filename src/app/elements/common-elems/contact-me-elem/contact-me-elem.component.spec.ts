import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMeElemComponent } from './contact-me-elem.component';

describe('ContactMeElemComponent', () => {
  let component: ContactMeElemComponent;
  let fixture: ComponentFixture<ContactMeElemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactMeElemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactMeElemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
