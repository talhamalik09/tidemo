import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancingDetails } from './financing-details';

describe('FinancingDetails', () => {
  let component: FinancingDetails;
  let fixture: ComponentFixture<FinancingDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancingDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(FinancingDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
