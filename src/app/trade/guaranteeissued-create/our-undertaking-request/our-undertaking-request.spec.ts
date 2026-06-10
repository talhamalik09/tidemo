import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurUndertakingRequest } from './our-undertaking-request';

describe('OurUndertakingRequest', () => {
  let component: OurUndertakingRequest;
  let fixture: ComponentFixture<OurUndertakingRequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurUndertakingRequest],
    }).compileComponents();

    fixture = TestBed.createComponent(OurUndertakingRequest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
