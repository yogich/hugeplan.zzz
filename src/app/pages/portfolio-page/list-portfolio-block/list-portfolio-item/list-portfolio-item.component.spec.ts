import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPortfolioItemComponent } from './list-portfolio-item.component';

describe('ListPortfolioItemComponent', () => {
  let component: ListPortfolioItemComponent;
  let fixture: ComponentFixture<ListPortfolioItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPortfolioItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPortfolioItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
