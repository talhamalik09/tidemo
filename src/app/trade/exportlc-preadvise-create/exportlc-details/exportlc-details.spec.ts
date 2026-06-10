import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportlcDetails } from './exportlc-details';

describe('ExportlcDetails', () => {
  let component: ExportlcDetails;
  let fixture: ComponentFixture<ExportlcDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExportlcDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(ExportlcDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
