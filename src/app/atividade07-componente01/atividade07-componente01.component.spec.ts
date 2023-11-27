import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atividade07Componente01Component } from './atividade07-componente01.component';

describe('Atividade07Componente01Component', () => {
  let component: Atividade07Componente01Component;
  let fixture: ComponentFixture<Atividade07Componente01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Atividade07Componente01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Atividade07Componente01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
