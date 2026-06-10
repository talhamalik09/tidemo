import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportCreate } from './export-create';

describe('ExportCreate', () => {
  let component: ExportCreate;
  let fixture: ComponentFixture<ExportCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExportCreate],
    }).compileComponents();

    fixture = TestBed.createComponent(ExportCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
