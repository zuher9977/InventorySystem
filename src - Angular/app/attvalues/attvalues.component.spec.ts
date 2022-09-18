import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttvaluesComponent } from './attvalues.component';

describe('AttvaluesComponent', () => {
  let component: AttvaluesComponent;
  let fixture: ComponentFixture<AttvaluesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttvaluesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttvaluesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
