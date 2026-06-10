import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceDetails } from './finance-details';

describe('FinanceDetails', () => {
  let component: FinanceDetails;
  let fixture: ComponentFixture<FinanceDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinanceDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(FinanceDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
