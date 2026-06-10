import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardCashLetter } from './outward-cash-letter';

describe('OutwardCashLetter', () => {
  let component: OutwardCashLetter;
  let fixture: ComponentFixture<OutwardCashLetter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutwardCashLetter],
    }).compileComponents();

    fixture = TestBed.createComponent(OutwardCashLetter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
