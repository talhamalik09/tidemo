import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndertakingAmountDetails } from './undertaking-amount-details';

describe('UndertakingAmountDetails', () => {
  let component: UndertakingAmountDetails;
  let fixture: ComponentFixture<UndertakingAmountDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UndertakingAmountDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(UndertakingAmountDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
