import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrenComponent } from './curren.component';

describe('CurrenComponent', () => {
  let component: CurrenComponent;
  let fixture: ComponentFixture<CurrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
