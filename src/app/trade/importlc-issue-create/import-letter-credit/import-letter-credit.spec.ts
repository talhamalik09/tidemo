import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportLetterCredit } from './import-letter-credit';

describe('ImportLetterCredit', () => {
  let component: ImportLetterCredit;
  let fixture: ComponentFixture<ImportLetterCredit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportLetterCredit],
    }).compileComponents();

    fixture = TestBed.createComponent(ImportLetterCredit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
