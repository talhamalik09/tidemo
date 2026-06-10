import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPartyPayment } from './third-party-payment';

describe('ThirdPartyPayment', () => {
  let component: ThirdPartyPayment;
  let fixture: ComponentFixture<ThirdPartyPayment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdPartyPayment],
    }).compileComponents();

    fixture = TestBed.createComponent(ThirdPartyPayment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
