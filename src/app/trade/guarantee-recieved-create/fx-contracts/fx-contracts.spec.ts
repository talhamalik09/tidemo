import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxContracts } from './fx-contracts';

describe('FxContracts', () => {
  let component: FxContracts;
  let fixture: ComponentFixture<FxContracts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FxContracts],
    }).compileComponents();

    fixture = TestBed.createComponent(FxContracts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
