import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseinputCreate } from './licenseinput-create';

describe('LicenseinputCreate', () => {
  let component: LicenseinputCreate;
  let fixture: ComponentFixture<LicenseinputCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicenseinputCreate],
    }).compileComponents();

    fixture = TestBed.createComponent(LicenseinputCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
