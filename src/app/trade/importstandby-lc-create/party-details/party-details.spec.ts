import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyDetails } from './party-details';

describe('PartyDetails', () => {
  let component: PartyDetails;
  let fixture: ComponentFixture<PartyDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartyDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(PartyDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
