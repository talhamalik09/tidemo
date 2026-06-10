import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrespondenceToSend } from './correspondence-to-send';

describe('CorrespondenceToSend', () => {
  let component: CorrespondenceToSend;
  let fixture: ComponentFixture<CorrespondenceToSend>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorrespondenceToSend],
    }).compileComponents();

    fixture = TestBed.createComponent(CorrespondenceToSend);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
