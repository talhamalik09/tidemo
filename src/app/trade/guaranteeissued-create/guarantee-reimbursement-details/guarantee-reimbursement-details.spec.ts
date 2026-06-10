import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuaranteeReimbursementDetails } from './guarantee-reimbursement-details';

describe('GuaranteeReimbursementDetails', () => {
  let component: GuaranteeReimbursementDetails;
  let fixture: ComponentFixture<GuaranteeReimbursementDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuaranteeReimbursementDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(GuaranteeReimbursementDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
