import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateXComponent } from './template-x.component';

describe('TemplateXComponent', () => {
  let component: TemplateXComponent;
  let fixture: ComponentFixture<TemplateXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
