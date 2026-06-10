import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerbillingCreate } from './customerbilling-create';

describe('CustomerbillingCreate', () => {
  let component: CustomerbillingCreate;
  let fixture: ComponentFixture<CustomerbillingCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerbillingCreate],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerbillingCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
