import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurcoursesComponent } from './ourcourses.component';

describe('OurcoursesComponent', () => {
  let component: OurcoursesComponent;
  let fixture: ComponentFixture<OurcoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurcoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
