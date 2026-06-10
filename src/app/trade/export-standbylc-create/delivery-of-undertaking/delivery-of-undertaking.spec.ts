import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryOfUndertaking } from './delivery-of-undertaking';

describe('DeliveryOfUndertaking', () => {
  let component: DeliveryOfUndertaking;
  let fixture: ComponentFixture<DeliveryOfUndertaking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryOfUndertaking],
    }).compileComponents();

    fixture = TestBed.createComponent(DeliveryOfUndertaking);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
