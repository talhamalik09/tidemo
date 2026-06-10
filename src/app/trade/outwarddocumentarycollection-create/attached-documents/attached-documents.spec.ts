import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachedDocuments } from './attached-documents';

describe('AttachedDocuments', () => {
  let component: AttachedDocuments;
  let fixture: ComponentFixture<AttachedDocuments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttachedDocuments],
    }).compileComponents();

    fixture = TestBed.createComponent(AttachedDocuments);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
