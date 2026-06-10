import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeDetailsReceived } from './charge-details-received';

describe('ChargeDetailsReceived', () => {
  let component: ChargeDetailsReceived;
  let fixture: ComponentFixture<ChargeDetailsReceived>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChargeDetailsReceived],
    }).compileComponents();

    fixture = TestBed.createComponent(ChargeDetailsReceived);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
