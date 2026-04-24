import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarOwner } from './car-owner';

describe('CarOwner', () => {
  let component: CarOwner;
  let fixture: ComponentFixture<CarOwner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarOwner],
    }).compileComponents();

    fixture = TestBed.createComponent(CarOwner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
