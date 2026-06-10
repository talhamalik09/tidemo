import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InwardcashLetterCreate } from './inwardcash-letter-create';

describe('InwardcashLetterCreate', () => {
  let component: InwardcashLetterCreate;
  let fixture: ComponentFixture<InwardcashLetterCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InwardcashLetterCreate],
    }).compileComponents();

    fixture = TestBed.createComponent(InwardcashLetterCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
