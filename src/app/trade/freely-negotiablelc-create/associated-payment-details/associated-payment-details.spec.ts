import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociatedPaymentDetails } from './associated-payment-details';

describe('AssociatedPaymentDetails', () => {
  let component: AssociatedPaymentDetails;
  let fixture: ComponentFixture<AssociatedPaymentDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssociatedPaymentDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(AssociatedPaymentDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
