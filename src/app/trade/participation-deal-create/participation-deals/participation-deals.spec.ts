import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipationDeals } from './participation-deals';

describe('ParticipationDeals', () => {
  let component: ParticipationDeals;
  let fixture: ComponentFixture<ParticipationDeals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticipationDeals],
    }).compileComponents();

    fixture = TestBed.createComponent(ParticipationDeals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
