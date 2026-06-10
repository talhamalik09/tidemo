import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardcashLetterCreate } from './outwardcash-letter-create';

describe('OutwardcashLetterCreate', () => {
  let component: OutwardcashLetterCreate;
  let fixture: ComponentFixture<OutwardcashLetterCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutwardcashLetterCreate],
    }).compileComponents();

    fixture = TestBed.createComponent(OutwardcashLetterCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
