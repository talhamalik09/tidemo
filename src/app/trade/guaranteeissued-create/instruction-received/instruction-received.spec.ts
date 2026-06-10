import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionReceived } from './instruction-received';

describe('InstructionReceived', () => {
  let component: InstructionReceived;
  let fixture: ComponentFixture<InstructionReceived>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructionReceived],
    }).compileComponents();

    fixture = TestBed.createComponent(InstructionReceived);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
