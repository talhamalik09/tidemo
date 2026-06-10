import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InwardCleanCollection } from './inward-clean-collection';

describe('InwardCleanCollection', () => {
  let component: InwardCleanCollection;
  let fixture: ComponentFixture<InwardCleanCollection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InwardCleanCollection],
    }).compileComponents();

    fixture = TestBed.createComponent(InwardCleanCollection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
