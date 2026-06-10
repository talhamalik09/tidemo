import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeCorrespondence } from './free-correspondence';

describe('FreeCorrespondence', () => {
  let component: FreeCorrespondence;
  let fixture: ComponentFixture<FreeCorrespondence>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreeCorrespondence],
    }).compileComponents();

    fixture = TestBed.createComponent(FreeCorrespondence);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
