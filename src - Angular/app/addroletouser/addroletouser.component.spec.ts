import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddroletouserComponent } from './addroletouser.component';

describe('AddroletouserComponent', () => {
  let component: AddroletouserComponent;
  let fixture: ComponentFixture<AddroletouserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddroletouserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddroletouserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
