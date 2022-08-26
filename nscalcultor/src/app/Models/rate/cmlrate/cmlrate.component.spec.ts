import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmlrateComponent } from './cmlrate.component';

describe('CmlrateComponent', () => {
  let component: CmlrateComponent;
  let fixture: ComponentFixture<CmlrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmlrateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmlrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
