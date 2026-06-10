import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndertakingReductionIncrease } from './undertaking-reduction-increase';

describe('UndertakingReductionIncrease', () => {
  let component: UndertakingReductionIncrease;
  let fixture: ComponentFixture<UndertakingReductionIncrease>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UndertakingReductionIncrease],
    }).compileComponents();

    fixture = TestBed.createComponent(UndertakingReductionIncrease);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
