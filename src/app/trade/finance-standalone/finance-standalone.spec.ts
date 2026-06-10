import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceStandalone } from './finance-standalone';

describe('FinanceStandalone', () => {
  let component: FinanceStandalone;
  let fixture: ComponentFixture<FinanceStandalone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinanceStandalone],
    }).compileComponents();

    fixture = TestBed.createComponent(FinanceStandalone);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
