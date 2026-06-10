import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuaranteeissuedCreate } from './guaranteeissued-create';

describe('GuaranteeissuedCreate', () => {
  let component: GuaranteeissuedCreate;
  let fixture: ComponentFixture<GuaranteeissuedCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuaranteeissuedCreate],
    }).compileComponents();

    fixture = TestBed.createComponent(GuaranteeissuedCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
