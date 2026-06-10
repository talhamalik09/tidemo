import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardCleanCollection } from './outward-clean-collection';

describe('OutwardCleanCollection', () => {
  let component: OutwardCleanCollection;
  let fixture: ComponentFixture<OutwardCleanCollection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutwardCleanCollection],
    }).compileComponents();

    fixture = TestBed.createComponent(OutwardCleanCollection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
