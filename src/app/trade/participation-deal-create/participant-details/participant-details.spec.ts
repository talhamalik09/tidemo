import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantDetails } from './participant-details';

describe('ParticipantDetails', () => {
  let component: ParticipantDetails;
  let fixture: ComponentFixture<ParticipantDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticipantDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(ParticipantDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
