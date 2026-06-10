import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportStandbylcCreate } from './export-standbylc-create';

describe('ExportStandbylcCreate', () => {
  let component: ExportStandbylcCreate;
  let fixture: ComponentFixture<ExportStandbylcCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExportStandbylcCreate],
    }).compileComponents();

    fixture = TestBed.createComponent(ExportStandbylcCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
