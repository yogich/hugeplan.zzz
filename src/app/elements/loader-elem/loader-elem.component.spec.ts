import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderElemComponent } from './loader-elem.component';

describe('LoaderElemComponent', () => {
  let component: LoaderElemComponent;
  let fixture: ComponentFixture<LoaderElemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderElemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderElemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
