import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialPaymentConditions } from './special-payment-conditions';

describe('SpecialPaymentConditions', () => {
  let component: SpecialPaymentConditions;
  let fixture: ComponentFixture<SpecialPaymentConditions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialPaymentConditions],
    }).compileComponents();

    fixture = TestBed.createComponent(SpecialPaymentConditions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
