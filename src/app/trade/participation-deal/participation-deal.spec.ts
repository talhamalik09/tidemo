import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipationDeal } from './participation-deal';

describe('ParticipationDeal', () => {
  let component: ParticipationDeal;
  let fixture: ComponentFixture<ParticipationDeal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticipationDeal],
    }).compileComponents();

    fixture = TestBed.createComponent(ParticipationDeal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
