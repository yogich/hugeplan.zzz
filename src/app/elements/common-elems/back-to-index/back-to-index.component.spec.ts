import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackToIndexComponent } from './back-to-index.component';

describe('BackToIndexComponent', () => {
  let component: BackToIndexComponent;
  let fixture: ComponentFixture<BackToIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackToIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackToIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
