import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteAtividade08Component } from './componente-atividade08.component';

describe('ComponenteAtividade08Component', () => {
  let component: ComponenteAtividade08Component;
  let fixture: ComponentFixture<ComponenteAtividade08Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteAtividade08Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteAtividade08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
