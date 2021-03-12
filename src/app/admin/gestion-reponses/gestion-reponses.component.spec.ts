import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionReponsesComponent } from './gestion-reponses.component';

describe('GestionReponsesComponent', () => {
  let component: GestionReponsesComponent;
  let fixture: ComponentFixture<GestionReponsesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionReponsesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionReponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
