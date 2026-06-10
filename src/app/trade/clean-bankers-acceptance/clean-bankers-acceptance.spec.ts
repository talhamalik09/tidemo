import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanBankersAcceptance } from './clean-bankers-acceptance';

describe('CleanBankersAcceptance', () => {
  let component: CleanBankersAcceptance;
  let fixture: ComponentFixture<CleanBankersAcceptance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CleanBankersAcceptance],
    }).compileComponents();

    fixture = TestBed.createComponent(CleanBankersAcceptance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
