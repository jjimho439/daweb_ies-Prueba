import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosAsignatura } from './alumnos-asignatura';

describe('AlumnosAsignatura', () => {
  let component: AlumnosAsignatura;
  let fixture: ComponentFixture<AlumnosAsignatura>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnosAsignatura]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnosAsignatura);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
