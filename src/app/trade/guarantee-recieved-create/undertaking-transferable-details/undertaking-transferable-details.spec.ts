import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndertakingTransferableDetails } from './undertaking-transferable-details';

describe('UndertakingTransferableDetails', () => {
  let component: UndertakingTransferableDetails;
  let fixture: ComponentFixture<UndertakingTransferableDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UndertakingTransferableDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(UndertakingTransferableDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
