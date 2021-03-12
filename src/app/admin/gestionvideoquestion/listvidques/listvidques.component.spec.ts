import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListvidquesComponent } from './listvidques.component';

describe('ListvidquesComponent', () => {
  let component: ListvidquesComponent;
  let fixture: ComponentFixture<ListvidquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListvidquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListvidquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
