import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportStandbyLc } from './export-standby-lc';

describe('ExportStandbyLc', () => {
  let component: ExportStandbyLc;
  let fixture: ComponentFixture<ExportStandbyLc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExportStandbyLc],
    }).compileComponents();

    fixture = TestBed.createComponent(ExportStandbyLc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
