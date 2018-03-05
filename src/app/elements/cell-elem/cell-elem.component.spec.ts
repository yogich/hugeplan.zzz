import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellElemComponent } from './cell-elem.component';

describe('CellElemComponent', () => {
  let component: CellElemComponent;
  let fixture: ComponentFixture<CellElemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellElemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellElemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
