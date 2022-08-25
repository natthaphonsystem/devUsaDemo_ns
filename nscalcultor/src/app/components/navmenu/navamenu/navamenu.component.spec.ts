import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavamenuComponent } from './navamenu.component';

describe('NavamenuComponent', () => {
  let component: NavamenuComponent;
  let fixture: ComponentFixture<NavamenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavamenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavamenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
