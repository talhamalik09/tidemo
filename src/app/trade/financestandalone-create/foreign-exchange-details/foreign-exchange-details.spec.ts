import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignExchangeDetails } from './foreign-exchange-details';

describe('ForeignExchangeDetails', () => {
  let component: ForeignExchangeDetails;
  let fixture: ComponentFixture<ForeignExchangeDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForeignExchangeDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(ForeignExchangeDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
