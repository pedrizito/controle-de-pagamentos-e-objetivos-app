import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteAtividade10Component } from './componente-atividade10.component';

describe('ComponenteAtividade10Component', () => {
  let component: ComponenteAtividade10Component;
  let fixture: ComponentFixture<ComponenteAtividade10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteAtividade10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteAtividade10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
