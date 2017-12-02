import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityFillerComponent } from './city-filler.component';

describe('CityFillerComponent', () => {
  let component: CityFillerComponent;
  let fixture: ComponentFixture<CityFillerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityFillerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityFillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
