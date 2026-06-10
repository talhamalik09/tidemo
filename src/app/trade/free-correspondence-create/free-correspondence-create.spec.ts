import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeCorrespondenceCreate } from './free-correspondence-create';

describe('FreeCorrespondenceCreate', () => {
  let component: FreeCorrespondenceCreate;
  let fixture: ComponentFixture<FreeCorrespondenceCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreeCorrespondenceCreate],
    }).compileComponents();

    fixture = TestBed.createComponent(FreeCorrespondenceCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
