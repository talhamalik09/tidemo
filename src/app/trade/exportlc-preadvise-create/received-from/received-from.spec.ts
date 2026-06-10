import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedFrom } from './received-from';

describe('ReceivedFrom', () => {
  let component: ReceivedFrom;
  let fixture: ComponentFixture<ReceivedFrom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceivedFrom],
    }).compileComponents();

    fixture = TestBed.createComponent(ReceivedFrom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
