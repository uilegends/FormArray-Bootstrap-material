import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1ncomp2Component } from './comp1ncomp2.component';

describe('Comp1ncomp2Component', () => {
  let component: Comp1ncomp2Component;
  let fixture: ComponentFixture<Comp1ncomp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1ncomp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1ncomp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
