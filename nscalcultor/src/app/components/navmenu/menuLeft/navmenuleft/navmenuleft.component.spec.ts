import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavmenuleftComponent } from './navmenuleft.component';

describe('NavmenuleftComponent', () => {
  let component: NavmenuleftComponent;
  let fixture: ComponentFixture<NavmenuleftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavmenuleftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavmenuleftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
