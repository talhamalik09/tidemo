import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipationDealCreate } from './participation-deal-create';

describe('ParticipationDealCreate', () => {
  let component: ParticipationDealCreate;
  let fixture: ComponentFixture<ParticipationDealCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticipationDealCreate],
    }).compileComponents();

    fixture = TestBed.createComponent(ParticipationDealCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
