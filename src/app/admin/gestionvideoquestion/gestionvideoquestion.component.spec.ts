import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionvideoquestionComponent } from './gestionvideoquestion.component';

describe('GestionvideoquestionComponent', () => {
  let component: GestionvideoquestionComponent;
  let fixture: ComponentFixture<GestionvideoquestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionvideoquestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionvideoquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
