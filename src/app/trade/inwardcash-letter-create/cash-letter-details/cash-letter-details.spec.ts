import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashLetterDetails } from './cash-letter-details';

describe('CashLetterDetails', () => {
  let component: CashLetterDetails;
  let fixture: ComponentFixture<CashLetterDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashLetterDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(CashLetterDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
