import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourGuideListingComponent } from './tour-guide-listing.component';

describe('TourGuideListingComponent', () => {
  let component: TourGuideListingComponent;
  let fixture: ComponentFixture<TourGuideListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourGuideListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourGuideListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
