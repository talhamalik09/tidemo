import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentguaranteeCreate } from './shipmentguarantee-create';

describe('ShipmentguaranteeCreate', () => {
  let component: ShipmentguaranteeCreate;
  let fixture: ComponentFixture<ShipmentguaranteeCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipmentguaranteeCreate],
    }).compileComponents();

    fixture = TestBed.createComponent(ShipmentguaranteeCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
