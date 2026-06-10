import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrespondenceReceived } from './correspondence-received';

describe('CorrespondenceReceived', () => {
  let component: CorrespondenceReceived;
  let fixture: ComponentFixture<CorrespondenceReceived>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorrespondenceReceived],
    }).compileComponents();

    fixture = TestBed.createComponent(CorrespondenceReceived);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
