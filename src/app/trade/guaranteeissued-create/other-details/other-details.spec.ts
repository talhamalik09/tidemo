import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherDetails } from './other-details';

describe('OtherDetails', () => {
  let component: OtherDetails;
  let fixture: ComponentFixture<OtherDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(OtherDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
