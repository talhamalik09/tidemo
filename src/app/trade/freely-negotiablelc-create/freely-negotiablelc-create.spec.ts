import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelyNegotiablelcCreate } from './freely-negotiablelc-create';

describe('FreelyNegotiablelcCreate', () => {
  let component: FreelyNegotiablelcCreate;
  let fixture: ComponentFixture<FreelyNegotiablelcCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreelyNegotiablelcCreate],
    }).compileComponents();

    fixture = TestBed.createComponent(FreelyNegotiablelcCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
