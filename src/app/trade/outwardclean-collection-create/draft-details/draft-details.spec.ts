import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftDetails } from './draft-details';

describe('DraftDetails', () => {
  let component: DraftDetails;
  let fixture: ComponentFixture<DraftDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DraftDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(DraftDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
