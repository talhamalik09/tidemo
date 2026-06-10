import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuaranteeIssued } from './guarantee-issued';

describe('GuaranteeIssued', () => {
  let component: GuaranteeIssued;
  let fixture: ComponentFixture<GuaranteeIssued>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuaranteeIssued],
    }).compileComponents();

    fixture = TestBed.createComponent(GuaranteeIssued);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
