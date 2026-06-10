import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndertakingTermsConditions } from './undertaking-terms-conditions';

describe('UndertakingTermsConditions', () => {
  let component: UndertakingTermsConditions;
  let fixture: ComponentFixture<UndertakingTermsConditions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UndertakingTermsConditions],
    }).compileComponents();

    fixture = TestBed.createComponent(UndertakingTermsConditions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
