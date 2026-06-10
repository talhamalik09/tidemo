import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegotiationDetails } from './negotiation-details';

describe('NegotiationDetails', () => {
  let component: NegotiationDetails;
  let fixture: ComponentFixture<NegotiationDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NegotiationDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(NegotiationDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
