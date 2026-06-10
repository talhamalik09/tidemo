import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuaranteeAmount } from './guarantee-amount';

describe('GuaranteeAmount', () => {
  let component: GuaranteeAmount;
  let fixture: ComponentFixture<GuaranteeAmount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuaranteeAmount],
    }).compileComponents();

    fixture = TestBed.createComponent(GuaranteeAmount);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
