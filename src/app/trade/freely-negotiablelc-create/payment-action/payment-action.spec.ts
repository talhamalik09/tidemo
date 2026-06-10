import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentAction } from './payment-action';

describe('PaymentAction', () => {
  let component: PaymentAction;
  let fixture: ComponentFixture<PaymentAction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentAction],
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentAction);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
