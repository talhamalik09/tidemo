import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountDetails } from './amount-details';

describe('AmountDetails', () => {
  let component: AmountDetails;
  let fixture: ComponentFixture<AmountDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmountDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(AmountDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
