import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusExComponent } from './plus-ex.component';

describe('PlusExComponent', () => {
  let component: PlusExComponent;
  let fixture: ComponentFixture<PlusExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlusExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlusExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
