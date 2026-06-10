import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelyNegotiablelc } from './freely-negotiablelc';

describe('FreelyNegotiablelc', () => {
  let component: FreelyNegotiablelc;
  let fixture: ComponentFixture<FreelyNegotiablelc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreelyNegotiablelc],
    }).compileComponents();

    fixture = TestBed.createComponent(FreelyNegotiablelc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
