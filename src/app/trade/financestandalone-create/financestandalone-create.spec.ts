import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancestandaloneCreate } from './financestandalone-create';

describe('FinancestandaloneCreate', () => {
  let component: FinancestandaloneCreate;
  let fixture: ComponentFixture<FinancestandaloneCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancestandaloneCreate],
    }).compileComponents();

    fixture = TestBed.createComponent(FinancestandaloneCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
