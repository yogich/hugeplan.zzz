import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellElemPortfolioComponent } from './cell-elem-portfolio.component';

describe('CellElemPortfolioComponent', () => {
  let component: CellElemPortfolioComponent;
  let fixture: ComponentFixture<CellElemPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellElemPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellElemPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
