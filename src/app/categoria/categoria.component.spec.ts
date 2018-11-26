import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Categoria } from './categoria.component';

describe('CategoriaComponent', () => {
  let component: Categoria;
  let fixture: ComponentFixture<Categoria>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Categoria ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Categoria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
