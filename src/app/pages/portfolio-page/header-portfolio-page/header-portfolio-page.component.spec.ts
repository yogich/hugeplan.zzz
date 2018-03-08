import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPortfolioPageComponent } from './header-portfolio-page.component';

describe('HeaderPortfolioPageComponent', () => {
  let component: HeaderPortfolioPageComponent;
  let fixture: ComponentFixture<HeaderPortfolioPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderPortfolioPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPortfolioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
