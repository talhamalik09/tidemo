import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewalDetails } from './renewal-details';

describe('RenewalDetails', () => {
  let component: RenewalDetails;
  let fixture: ComponentFixture<RenewalDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenewalDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(RenewalDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
