import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndertakingMainDetails } from './undertaking-main-details';

describe('UndertakingMainDetails', () => {
  let component: UndertakingMainDetails;
  let fixture: ComponentFixture<UndertakingMainDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UndertakingMainDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(UndertakingMainDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
