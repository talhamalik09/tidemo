import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndertakingDeliveryOfUndertaking } from './undertaking-delivery-of-undertaking';

describe('UndertakingDekiveryofUndertaking', () => {
  let component: UndertakingDeliveryOfUndertaking;
  let fixture: ComponentFixture<UndertakingDeliveryOfUndertaking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UndertakingDeliveryOfUndertaking],
    }).compileComponents();

    fixture = TestBed.createComponent(UndertakingDeliveryOfUndertaking);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
