import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalConditions } from './additional-conditions';

describe('AdditionalConditions', () => {
  let component: AdditionalConditions;
  let fixture: ComponentFixture<AdditionalConditions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdditionalConditions],
    }).compileComponents();

    fixture = TestBed.createComponent(AdditionalConditions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
