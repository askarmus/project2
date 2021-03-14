import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCheckCircleComponent } from './custom-check-circle.component';

describe('CustomCheckCircleComponent', () => {
  let component: CustomCheckCircleComponent;
  let fixture: ComponentFixture<CustomCheckCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomCheckCircleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCheckCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
