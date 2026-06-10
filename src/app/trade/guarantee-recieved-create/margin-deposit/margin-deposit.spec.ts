import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarginDeposit } from './margin-deposit';

describe('MarginDeposit', () => {
  let component: MarginDeposit;
  let fixture: ComponentFixture<MarginDeposit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarginDeposit],
    }).compileComponents();

    fixture = TestBed.createComponent(MarginDeposit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
