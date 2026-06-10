import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardClean } from './outward-clean';

describe('OutwardClean', () => {
  let component: OutwardClean;
  let fixture: ComponentFixture<OutwardClean>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutwardClean],
    }).compileComponents();

    fixture = TestBed.createComponent(OutwardClean);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
