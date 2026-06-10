import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInstructions } from './general-instructions';

describe('GeneralInstructions', () => {
  let component: GeneralInstructions;
  let fixture: ComponentFixture<GeneralInstructions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralInstructions],
    }).compileComponents();

    fixture = TestBed.createComponent(GeneralInstructions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
