import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinusExComponent } from './minus-ex.component';

describe('MinusExComponent', () => {
  let component: MinusExComponent;
  let fixture: ComponentFixture<MinusExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinusExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinusExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
