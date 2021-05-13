import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexExComponent } from './complex-ex.component';

describe('ComplexExComponent', () => {
  let component: ComplexExComponent;
  let fixture: ComponentFixture<ComplexExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplexExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
