import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportStandbylcDetails } from './export-standbylc-details';

describe('ExportStandbylcDetails', () => {
  let component: ExportStandbylcDetails;
  let fixture: ComponentFixture<ExportStandbylcDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExportStandbylcDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(ExportStandbylcDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
