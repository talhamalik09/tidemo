import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalAmount } from './additional-amount';

describe('AdditionalAmount', () => {
  let component: AdditionalAmount;
  let fixture: ComponentFixture<AdditionalAmount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdditionalAmount],
    }).compileComponents();

    fixture = TestBed.createComponent(AdditionalAmount);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
