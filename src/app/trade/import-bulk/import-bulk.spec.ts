import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportBulk } from './import-bulk';

describe('ImportBulk', () => {
  let component: ImportBulk;
  let fixture: ComponentFixture<ImportBulk>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportBulk],
    }).compileComponents();

    fixture = TestBed.createComponent(ImportBulk);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
