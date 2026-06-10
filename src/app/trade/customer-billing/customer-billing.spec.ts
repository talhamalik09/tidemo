import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBilling } from './customer-billing';

describe('CustomerBilling', () => {
  let component: CustomerBilling;
  let fixture: ComponentFixture<CustomerBilling>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerBilling],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerBilling);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
