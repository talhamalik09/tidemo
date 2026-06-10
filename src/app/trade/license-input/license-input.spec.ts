import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseInput } from './license-input';

describe('LicenseInput', () => {
  let component: LicenseInput;
  let fixture: ComponentFixture<LicenseInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicenseInput],
    }).compileComponents();

    fixture = TestBed.createComponent(LicenseInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
