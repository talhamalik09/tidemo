import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidityDetails } from './validity-details';

describe('ValidityDetails', () => {
  let component: ValidityDetails;
  let fixture: ComponentFixture<ValidityDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidityDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(ValidityDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
