import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportAppend } from './export-append';

describe('ExportAppend', () => {
  let component: ExportAppend;
  let fixture: ComponentFixture<ExportAppend>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExportAppend],
    }).compileComponents();

    fixture = TestBed.createComponent(ExportAppend);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
