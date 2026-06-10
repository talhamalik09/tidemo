import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherBeneficiaryBank } from './other-beneficiary-bank';

describe('OtherBeneficiaryBank', () => {
  let component: OtherBeneficiaryBank;
  let fixture: ComponentFixture<OtherBeneficiaryBank>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherBeneficiaryBank],
    }).compileComponents();

    fixture = TestBed.createComponent(OtherBeneficiaryBank);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
