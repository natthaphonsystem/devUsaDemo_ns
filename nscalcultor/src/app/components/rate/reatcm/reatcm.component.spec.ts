import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReatcmComponent } from './reatcm.component';

describe('ReatcmComponent', () => {
  let component: ReatcmComponent;
  let fixture: ComponentFixture<ReatcmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReatcmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReatcmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
