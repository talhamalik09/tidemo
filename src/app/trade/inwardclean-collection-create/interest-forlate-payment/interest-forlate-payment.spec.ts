import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestForlatePayment } from './interest-forlate-payment';

describe('InterestForlatePayment', () => {
  let component: InterestForlatePayment;
  let fixture: ComponentFixture<InterestForlatePayment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterestForlatePayment],
    }).compileComponents();

    fixture = TestBed.createComponent(InterestForlatePayment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
