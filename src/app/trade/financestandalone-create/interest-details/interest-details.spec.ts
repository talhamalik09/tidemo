import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestDetails } from './interest-details';

describe('InterestDetails', () => {
  let component: InterestDetails;
  let fixture: ComponentFixture<InterestDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterestDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(InterestDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
