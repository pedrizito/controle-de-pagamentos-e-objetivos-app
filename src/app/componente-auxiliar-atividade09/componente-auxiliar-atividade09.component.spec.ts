import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteAuxiliarAtividade09Component } from './componente-auxiliar-atividade09.component';

describe('ComponenteAuxiliarAtividade09Component', () => {
  let component: ComponenteAuxiliarAtividade09Component;
  let fixture: ComponentFixture<ComponenteAuxiliarAtividade09Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteAuxiliarAtividade09Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteAuxiliarAtividade09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
