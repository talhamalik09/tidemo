import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndertakingDocumentInstructions } from './undertaking-document-instructions';

describe('UndertakingDocumentInstructions', () => {
  let component: UndertakingDocumentInstructions;
  let fixture: ComponentFixture<UndertakingDocumentInstructions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UndertakingDocumentInstructions],
    }).compileComponents();

    fixture = TestBed.createComponent(UndertakingDocumentInstructions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
