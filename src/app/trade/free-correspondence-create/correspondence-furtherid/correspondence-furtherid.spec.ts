import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrespondenceFurtherid } from './correspondence-furtherid';

describe('CorrespondenceFurtherid', () => {
  let component: CorrespondenceFurtherid;
  let fixture: ComponentFixture<CorrespondenceFurtherid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorrespondenceFurtherid],
    }).compileComponents();

    fixture = TestBed.createComponent(CorrespondenceFurtherid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
