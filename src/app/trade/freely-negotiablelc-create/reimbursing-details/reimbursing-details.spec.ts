import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimbursingDetails } from './reimbursing-details';

describe('ReimbursingDetails', () => {
  let component: ReimbursingDetails;
  let fixture: ComponentFixture<ReimbursingDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReimbursingDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(ReimbursingDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
