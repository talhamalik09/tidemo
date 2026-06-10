import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepaymentSchedules } from './repayment-schedules';

describe('RepaymentSchedules', () => {
  let component: RepaymentSchedules;
  let fixture: ComponentFixture<RepaymentSchedules>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepaymentSchedules],
    }).compileComponents();

    fixture = TestBed.createComponent(RepaymentSchedules);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
