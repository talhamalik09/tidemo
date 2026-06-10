import { ComponentFixture, TestBed } from '@angular/core/testing';

import { tradeComponent } from './trade';

describe('Trade', () => {
  let component: tradeComponent;
  let fixture: ComponentFixture<tradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [tradeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(tradeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
