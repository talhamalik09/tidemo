import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountForearlyPayment } from './discount-forearly-payment';

describe('DiscountForearlyPayment', () => {
  let component: DiscountForearlyPayment;
  let fixture: ComponentFixture<DiscountForearlyPayment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscountForearlyPayment],
    }).compileComponents();

    fixture = TestBed.createComponent(DiscountForearlyPayment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
