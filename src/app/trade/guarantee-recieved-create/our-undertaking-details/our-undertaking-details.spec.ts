import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurUndertakingDetails } from './our-undertaking-details';

describe('OurUndertakingDetails', () => {
  let component: OurUndertakingDetails;
  let fixture: ComponentFixture<OurUndertakingDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurUndertakingDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(OurUndertakingDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
