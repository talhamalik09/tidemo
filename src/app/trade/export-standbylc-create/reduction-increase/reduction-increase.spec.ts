import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReductionIncrease } from './reduction-increase';

describe('ReductionIncrease', () => {
  let component: ReductionIncrease;
  let fixture: ComponentFixture<ReductionIncrease>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReductionIncrease],
    }).compileComponents();

    fixture = TestBed.createComponent(ReductionIncrease);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
