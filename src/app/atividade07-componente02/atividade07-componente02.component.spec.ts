import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atividade07Componente02Component } from './atividade07-componente02.component';

describe('Atividade07Componente02Component', () => {
  let component: Atividade07Componente02Component;
  let fixture: ComponentFixture<Atividade07Componente02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Atividade07Componente02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Atividade07Componente02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
