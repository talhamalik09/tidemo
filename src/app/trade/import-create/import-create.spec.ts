import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportCreate } from './import-create';

describe('ImportCreate', () => {
  let component: ImportCreate;
  let fixture: ComponentFixture<ImportCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportCreate],
    }).compileComponents();

    fixture = TestBed.createComponent(ImportCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
