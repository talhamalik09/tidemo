import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndertakingRenewalDetails } from './undertaking-renewal-details';

describe('UndertakingRenewalDetails', () => {
  let component: UndertakingRenewalDetails;
  let fixture: ComponentFixture<UndertakingRenewalDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UndertakingRenewalDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(UndertakingRenewalDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
