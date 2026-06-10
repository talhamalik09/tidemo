import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Collateral } from './collateral';

describe('Collateral', () => {
  let component: Collateral;
  let fixture: ComponentFixture<Collateral>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Collateral],
    }).compileComponents();

    fixture = TestBed.createComponent(Collateral);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
