import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentGuarantee } from './shipment-guarantee';

describe('ShipmentGuarantee', () => {
  let component: ShipmentGuarantee;
  let fixture: ComponentFixture<ShipmentGuarantee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipmentGuarantee],
    }).compileComponents();

    fixture = TestBed.createComponent(ShipmentGuarantee);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
