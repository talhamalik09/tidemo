import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimbursementCreate } from './reimbursement-create';

describe('ReimbursementCreate', () => {
  let component: ReimbursementCreate;
  let fixture: ComponentFixture<ReimbursementCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReimbursementCreate],
    }).compileComponents();

    fixture = TestBed.createComponent(ReimbursementCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
