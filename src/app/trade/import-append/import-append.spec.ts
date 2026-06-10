import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportAppend } from './import-append';

describe('ImportAppend', () => {
  let component: ImportAppend;
  let fixture: ComponentFixture<ImportAppend>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportAppend],
    }).compileComponents();

    fixture = TestBed.createComponent(ImportAppend);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
