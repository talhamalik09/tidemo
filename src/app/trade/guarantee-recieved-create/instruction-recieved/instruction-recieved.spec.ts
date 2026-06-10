import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionRecieved } from './instruction-recieved';

describe('InstructionRecieved', () => {
  let component: InstructionRecieved;
  let fixture: ComponentFixture<InstructionRecieved>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructionRecieved],
    }).compileComponents();

    fixture = TestBed.createComponent(InstructionRecieved);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
