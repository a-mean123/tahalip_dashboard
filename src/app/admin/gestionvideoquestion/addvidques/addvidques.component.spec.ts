import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvidquesComponent } from './addvidques.component';

describe('AddvidquesComponent', () => {
  let component: AddvidquesComponent;
  let fixture: ComponentFixture<AddvidquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddvidquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddvidquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
