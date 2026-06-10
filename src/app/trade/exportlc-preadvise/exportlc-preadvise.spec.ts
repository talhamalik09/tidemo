import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportlcPreadvise } from './exportlc-preadvise';

describe('ExportlcPreadvise', () => {
  let component: ExportlcPreadvise;
  let fixture: ComponentFixture<ExportlcPreadvise>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExportlcPreadvise],
    }).compileComponents();

    fixture = TestBed.createComponent(ExportlcPreadvise);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
