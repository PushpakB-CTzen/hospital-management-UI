import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhycisianAppointmentComponent } from './phycisian-appointment.component';

describe('PhycisianAppointmentComponent', () => {
  let component: PhycisianAppointmentComponent;
  let fixture: ComponentFixture<PhycisianAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhycisianAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhycisianAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
