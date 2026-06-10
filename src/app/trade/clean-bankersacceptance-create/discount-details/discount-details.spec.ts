import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountDetails } from './discount-details';

describe('DiscountDetails', () => {
  let component: DiscountDetails;
  let fixture: ComponentFixture<DiscountDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscountDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(DiscountDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
