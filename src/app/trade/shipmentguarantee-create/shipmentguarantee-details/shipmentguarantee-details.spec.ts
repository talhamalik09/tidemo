import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentguaranteeDetails } from './shipmentguarantee-details';

describe('ShipmentguaranteeDetails', () => {
  let component: ShipmentguaranteeDetails;
  let fixture: ComponentFixture<ShipmentguaranteeDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipmentguaranteeDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(ShipmentguaranteeDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
