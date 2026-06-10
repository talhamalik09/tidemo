import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportLetterOfCredit } from './export-letter-of-credit';

describe('ExportLetterOfCredit', () => {
  let component: ExportLetterOfCredit;
  let fixture: ComponentFixture<ExportLetterOfCredit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExportLetterOfCredit],
    }).compileComponents();

    fixture = TestBed.createComponent(ExportLetterOfCredit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
