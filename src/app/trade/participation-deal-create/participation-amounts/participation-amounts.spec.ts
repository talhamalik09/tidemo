import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipationAmounts } from './participation-amounts';

describe('ParticipationAmounts', () => {
  let component: ParticipationAmounts;
  let fixture: ComponentFixture<ParticipationAmounts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticipationAmounts],
    }).compileComponents();

    fixture = TestBed.createComponent(ParticipationAmounts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
