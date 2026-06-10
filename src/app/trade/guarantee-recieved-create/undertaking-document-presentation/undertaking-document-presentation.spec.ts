import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndertakingDocumentPresentation } from './undertaking-document-presentation';

describe('UndertakingDocumentPresentation', () => {
  let component: UndertakingDocumentPresentation;
  let fixture: ComponentFixture<UndertakingDocumentPresentation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UndertakingDocumentPresentation],
    }).compileComponents();

    fixture = TestBed.createComponent(UndertakingDocumentPresentation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
