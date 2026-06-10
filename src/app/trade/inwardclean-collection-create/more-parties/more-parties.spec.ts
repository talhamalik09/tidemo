import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreParties } from './more-parties';

describe('MoreParties', () => {
  let component: MoreParties;
  let fixture: ComponentFixture<MoreParties>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreParties],
    }).compileComponents();

    fixture = TestBed.createComponent(MoreParties);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
