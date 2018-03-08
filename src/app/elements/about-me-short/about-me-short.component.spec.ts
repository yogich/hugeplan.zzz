import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeShortComponent } from './about-me-short.component';

describe('AboutMeShortComponent', () => {
  let component: AboutMeShortComponent;
  let fixture: ComponentFixture<AboutMeShortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutMeShortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
