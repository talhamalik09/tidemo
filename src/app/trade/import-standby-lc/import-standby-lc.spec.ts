import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportStandbyLc } from './import-standby-lc';

describe('ImportStandbyLc', () => {
  let component: ImportStandbyLc;
  let fixture: ComponentFixture<ImportStandbyLc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportStandbyLc],
    }).compileComponents();

    fixture = TestBed.createComponent(ImportStandbyLc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
