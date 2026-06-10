import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignExchangeContracts } from './foreign-exchange-contracts';

describe('ForeignExchangeContracts', () => {
  let component: ForeignExchangeContracts;
  let fixture: ComponentFixture<ForeignExchangeContracts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForeignExchangeContracts],
    }).compileComponents();

    fixture = TestBed.createComponent(ForeignExchangeContracts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
