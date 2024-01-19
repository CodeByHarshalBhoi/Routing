import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursesDetailsComponent } from './curses-details.component';

describe('CursesDetailsComponent', () => {
  let component: CursesDetailsComponent;
  let fixture: ComponentFixture<CursesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
