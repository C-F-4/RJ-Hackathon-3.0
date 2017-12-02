import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullVrViewComponent } from './full-vr-view.component';

describe('FullVrViewComponent', () => {
  let component: FullVrViewComponent;
  let fixture: ComponentFixture<FullVrViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullVrViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullVrViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
