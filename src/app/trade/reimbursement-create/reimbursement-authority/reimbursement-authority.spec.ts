import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimbursementAuthority } from './reimbursement-authority';

describe('ReimbursementAuthority', () => {
  let component: ReimbursementAuthority;
  let fixture: ComponentFixture<ReimbursementAuthority>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReimbursementAuthority],
    }).compileComponents();

    fixture = TestBed.createComponent(ReimbursementAuthority);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
