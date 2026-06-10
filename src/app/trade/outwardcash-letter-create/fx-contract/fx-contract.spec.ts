import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxContract } from './fx-contract';

describe('FxContract', () => {
  let component: FxContract;
  let fixture: ComponentFixture<FxContract>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FxContract],
    }).compileComponents();

    fixture = TestBed.createComponent(FxContract);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
