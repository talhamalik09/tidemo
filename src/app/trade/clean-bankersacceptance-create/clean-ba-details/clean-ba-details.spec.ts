import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanBADetails } from './clean-ba-details';

describe('CleanBADetails', () => {
  let component: CleanBADetails;
  let fixture: ComponentFixture<CleanBADetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CleanBADetails],
    }).compileComponents();

    fixture = TestBed.createComponent(CleanBADetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
