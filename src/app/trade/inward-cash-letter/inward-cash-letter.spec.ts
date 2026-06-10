import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InwardCashLetter } from './inward-cash-letter';

describe('InwardCashLetter', () => {
  let component: InwardCashLetter;
  let fixture: ComponentFixture<InwardCashLetter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InwardCashLetter],
    }).compileComponents();

    fixture = TestBed.createComponent(InwardCashLetter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
