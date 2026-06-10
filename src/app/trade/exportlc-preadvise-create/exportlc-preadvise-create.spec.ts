import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportlcPreadviseCreate } from './exportlc-preadvise-create';

describe('ExportlcPreadviseCreate', () => {
  let component: ExportlcPreadviseCreate;
  let fixture: ComponentFixture<ExportlcPreadviseCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExportlcPreadviseCreate],
    }).compileComponents();

    fixture = TestBed.createComponent(ExportlcPreadviseCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
