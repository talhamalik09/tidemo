import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorityAmount } from './authority-amount';

describe('AuthorityAmount', () => {
  let component: AuthorityAmount;
  let fixture: ComponentFixture<AuthorityAmount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorityAmount],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthorityAmount);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
