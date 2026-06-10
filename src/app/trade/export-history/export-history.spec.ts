import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportHistory } from './export-history';

describe('ExportHistory', () => {
  let component: ExportHistory;
  let fixture: ComponentFixture<ExportHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExportHistory],
    }).compileComponents();

    fixture = TestBed.createComponent(ExportHistory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
