import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyInstructions } from './party-instructions';

describe('PartyInstructions', () => {
  let component: PartyInstructions;
  let fixture: ComponentFixture<PartyInstructions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartyInstructions],
    }).compileComponents();

    fixture = TestBed.createComponent(PartyInstructions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
