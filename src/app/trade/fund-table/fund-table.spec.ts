import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundTable } from './fund-table';

describe('FundTable', () => {
  let component: FundTable;
  let fixture: ComponentFixture<FundTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundTable],
    }).compileComponents();

    fixture = TestBed.createComponent(FundTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
