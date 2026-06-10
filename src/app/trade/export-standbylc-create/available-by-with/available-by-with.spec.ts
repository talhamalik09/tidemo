import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableByWith } from './available-by-with';

describe('AvailableByWith', () => {
  let component: AvailableByWith;
  let fixture: ComponentFixture<AvailableByWith>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailableByWith],
    }).compileComponents();

    fixture = TestBed.createComponent(AvailableByWith);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
