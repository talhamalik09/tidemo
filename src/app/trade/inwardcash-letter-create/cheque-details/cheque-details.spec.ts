import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeDetails } from './cheque-details';

describe('ChequeDetails', () => {
  let component: ChequeDetails;
  let fixture: ComponentFixture<ChequeDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChequeDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(ChequeDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
