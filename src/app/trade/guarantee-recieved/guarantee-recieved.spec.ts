import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuaranteeRecieved } from './guarantee-recieved';

describe('GuaranteeRecieved', () => {
  let component: GuaranteeRecieved;
  let fixture: ComponentFixture<GuaranteeRecieved>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuaranteeRecieved],
    }).compileComponents();

    fixture = TestBed.createComponent(GuaranteeRecieved);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
