import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageAdmin } from './garage-admin';

describe('GarageAdmin', () => {
  let component: GarageAdmin;
  let fixture: ComponentFixture<GarageAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GarageAdmin],
    }).compileComponents();

    fixture = TestBed.createComponent(GarageAdmin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
