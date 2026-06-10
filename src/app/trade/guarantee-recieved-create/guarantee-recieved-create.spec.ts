import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuaranteeRecievedCreate } from './guarantee-recieved-create';

describe('GuaranteeRecievedCreate', () => {
  let component: GuaranteeRecievedCreate;
  let fixture: ComponentFixture<GuaranteeRecievedCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuaranteeRecievedCreate],
    }).compileComponents();

    fixture = TestBed.createComponent(GuaranteeRecievedCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
