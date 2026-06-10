import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeDetails } from './charge-details';

describe('ChargeDetails', () => {
  let component: ChargeDetails;
  let fixture: ComponentFixture<ChargeDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChargeDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(ChargeDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
