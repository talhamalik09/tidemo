import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderlyingTransaction } from './underlying-transaction';

describe('UnderlyingTransaction', () => {
  let component: UnderlyingTransaction;
  let fixture: ComponentFixture<UnderlyingTransaction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderlyingTransaction],
    }).compileComponents();

    fixture = TestBed.createComponent(UnderlyingTransaction);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
