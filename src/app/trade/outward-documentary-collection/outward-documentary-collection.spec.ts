import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardDocumentaryCollection } from './outward-documentary-collection';

describe('OutwardDocumentaryCollection', () => {
  let component: OutwardDocumentaryCollection;
  let fixture: ComponentFixture<OutwardDocumentaryCollection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutwardDocumentaryCollection],
    }).compileComponents();

    fixture = TestBed.createComponent(OutwardDocumentaryCollection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
