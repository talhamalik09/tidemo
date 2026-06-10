import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InwardDocumentaryCollection } from './inward-documentary-collection';

describe('InwardDocumentaryCollection', () => {
  let component: InwardDocumentaryCollection;
  let fixture: ComponentFixture<InwardDocumentaryCollection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InwardDocumentaryCollection],
    }).compileComponents();

    fixture = TestBed.createComponent(InwardDocumentaryCollection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
