import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviseDetails } from './advise-details';

describe('AdviseDetails', () => {
  let component: AdviseDetails;
  let fixture: ComponentFixture<AdviseDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdviseDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(AdviseDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
