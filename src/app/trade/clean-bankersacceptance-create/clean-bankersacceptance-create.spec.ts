import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanBankersacceptanceCreate } from './clean-bankersacceptance-create';

describe('CleanBankersacceptanceCreate', () => {
  let component: CleanBankersacceptanceCreate;
  let fixture: ComponentFixture<CleanBankersacceptanceCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CleanBankersacceptanceCreate],
    }).compileComponents();

    fixture = TestBed.createComponent(CleanBankersacceptanceCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
