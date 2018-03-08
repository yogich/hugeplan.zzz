import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPortfolioBlockComponent } from './list-portfolio-block.component';

describe('ListPortfolioBlockComponent', () => {
  let component: ListPortfolioBlockComponent;
  let fixture: ComponentFixture<ListPortfolioBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPortfolioBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPortfolioBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
