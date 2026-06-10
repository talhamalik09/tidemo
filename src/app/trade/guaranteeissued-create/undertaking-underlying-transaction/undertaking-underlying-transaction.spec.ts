import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndertakingUnderlyingTransaction } from './undertaking-underlying-transaction';

describe('UndertakingUnderlyingTransaction', () => {
  let component: UndertakingUnderlyingTransaction;
  let fixture: ComponentFixture<UndertakingUnderlyingTransaction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UndertakingUnderlyingTransaction],
    }).compileComponents();

    fixture = TestBed.createComponent(UndertakingUnderlyingTransaction);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
