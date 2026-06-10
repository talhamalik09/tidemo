import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportBulk } from './export-bulk';

describe('ExportBulk', () => {
  let component: ExportBulk;
  let fixture: ComponentFixture<ExportBulk>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExportBulk],
    }).compileComponents();

    fixture = TestBed.createComponent(ExportBulk);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
