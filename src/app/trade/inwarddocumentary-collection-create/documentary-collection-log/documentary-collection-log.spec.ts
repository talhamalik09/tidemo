import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentaryCollectionLog } from './documentary-collection-log';

describe('DocumentaryCollectionLog', () => {
  let component: DocumentaryCollectionLog;
  let fixture: ComponentFixture<DocumentaryCollectionLog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentaryCollectionLog],
    }).compileComponents();

    fixture = TestBed.createComponent(DocumentaryCollectionLog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
