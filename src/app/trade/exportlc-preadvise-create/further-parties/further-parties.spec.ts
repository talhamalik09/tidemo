import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurtherParties } from './further-parties';

describe('FurtherParties', () => {
  let component: FurtherParties;
  let fixture: ComponentFixture<FurtherParties>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FurtherParties],
    }).compileComponents();

    fixture = TestBed.createComponent(FurtherParties);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
